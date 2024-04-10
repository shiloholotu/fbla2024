import firebase_admin
from flask import Flask, render_template, request, url_for, redirect
from firebase_admin import db, credentials

app = Flask(__name__)

cred = credentials.Certificate("key.json")
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

@app.route("/engineer")
def engineer():
    return render_template("engineer.html")

@app.route("/data")
def data():
    return render_template("data.html")

@app.route("/risk")
def risk():
    return render_template("risk.html")

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


@app.route("/submit/<inp>/<rnd>")
def submit(inp,rnd):
    data = ["job","firstname","lastname","email","phone","resume","outreach","startdate","immigration","workability","additionalinfo","profile","experience"]
    inp = decodeHex(inp).split(":BB:")
    inp = inp[:-1]

    for i in range(len(data)):
        db.reference("/"+ rnd + "/" + data[i]).set(inp[i])
    return render_template("success.html")

if __name__ == "__main__":
    app.run()
