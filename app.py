from flask import Flask, render_template


app = Flask(__name__)

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

if __name__ == "__main__":
    app.run(debug=True)
