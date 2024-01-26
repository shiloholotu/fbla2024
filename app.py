from flask import Flask, request, jsonify, render_template
from firebase_admin import db, credentials
import firebase_admin

app = Flask(__name__)


cred = credentials.Certificate("key.json")
firebase_admin.initialize_app(cred, {"databaseURL":"https://fbla-decfd-default-rtdb.firebaseio.com/"})

ref = db.reference("/")

def decodeHex(hstr):
    return bytes.fromhex(hstr).decode("utf-8")

print(decodeHex("7368696c6f682069732074657374696e6720686578207374756666"))
    


'''
# Initialize Firestore DB
cred = credentials.Certificate('key.json')
default_app = initialize_app(cred)
db = firestore.client()
todo_ref = db.collection('todos')

@app.route('/add', methods=['POST'])
def create():
    try:
        id = request.json['id']
        todo_ref.document(id).set(request.json)
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occured: {e}"
    
@app.route('/list', methods=['GET'])
def read():
    try:
        # Check if ID was passed to URL query
        todo_id = request.args.get('id')    
        if todo_id:
            todo = todo_ref.document(todo_id).get()
            return jsonify(todo.to_dict()), 200
        else:
            all_todos = [doc.to_dict() for doc in todo_ref.stream()]
            return jsonify(all_todos), 200
    except Exception as e:
        return f"An Error Occured: {e}"
    
@app.route('/update', methods=['POST', 'PUT'])
def update():
    try:
        id = request.json['id']
        todo_ref.document(id).update(request.json)
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occured: {e}"
    
@app.route('/delete', methods=['GET', 'DELETE'])
def delete():
    try:
        # Check for ID in URL query
        todo_id = request.args.get('id')
        todo_ref.document(todo_id).delete()
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occured: {e}"
'''
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
