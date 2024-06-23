import firebase_admin
from flask import Flask, render_template, request, url_for, redirect
from firebase_admin import db, credentials
import json
import os

app = Flask(__name__)
cred = None
try:
    cred = credentials.Certificate("key.json")
except:
    cred = credentials.Certificate(json.loads(os.environ.get("API_KEY")))
firebase_admin.initialize_app(cred, {"databaseURL":"https://fbla-decfd-default-rtdb.firebaseio.com/"})

ref = db.reference("/")

def decodeHex(hstr):
    return bytes.fromhex(hstr).decode("utf-8")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/demo")
def demo():
    return render_template("demo.html")

@app.route("/careers")
def careers():
    return render_template("careers.html")

@app.route("/application")
def application():
    return render_template("application.html")

@app.route("/positions")
def positions():
    return render_template("positions.html")

@app.route("/sources")
def sources():
    return render_template("sources.html")

@app.route("/aboutus")
def aboutus():
    return render_template("aboutus.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/submit/<inp>/<rnd>")
def submit(inp,rnd):
    data = ["job","firstname","lastname","email","phone","resume","outreach","startdate","immigration","workability","additionalinfo","profile","experience"]
    inp = decodeHex(inp).split(":BB:")
    inp = inp[:-1]

    for i in range(len(data)):
        db.reference("/"+ rnd + "/" + data[i]).set(inp[i])
    return render_template("success.html")

if __name__ == "__main__":
    app.run(debug=True)
