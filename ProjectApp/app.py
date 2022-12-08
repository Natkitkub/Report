import os
from flask import Flask, render_template,request
app = Flask(__name__)
path_folder =os.path.join(os.path.dirname(__file__),"templates/")

@app.route('/',methods=["GET"])
def index():
    return render_template('index.html')
def maincss():
    return render_template('main.css')
@app.route('/post',methods=["POST"])
def post():
    return "post methood"
@app.route('/query',methods=["POST"])
def query():
    name = request.args.get("name")
    return 'potae love' + name 
@app.route('/form',methods=["POST"])
def form_data():
    name = request.form.get("name")
    age = request.form.get("age")
    return name + 'is'  + str(age) 
@app.route('/user/<user_id>',methods=["POST"])
def get_user(user_id):
    return user_id
    
    
    
    
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)