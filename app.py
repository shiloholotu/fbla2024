from flask import Flask, render_template


app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/try")
def tryPage():
    return render_template("try.html")


if __name__ == "__main__":
    app.run()
