from flask import Flask, render_template, request, json
from openai import OpenAI
client = OpenAI(
    api_key = open("key.txt","r").read().strip("\n")
)

completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages = [{"role":"user","content":"Briefly explain quantum physics"}]
)

print(completion)

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run()
