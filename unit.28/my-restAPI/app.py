"""Flask app for dessert demo."""

from flask import Flask, request, jsonify, render_template
from models import db, connect_db, Todo

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///todos_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)

app.app_context().push()


@app.route('/')
def index_page():
    """Renders html template that includes some JS - NOT PART OF JSON API!"""
    todos = Todo.query.all()
    return render_template('index.html', todos=todos)



@app.route('/API/todos')
def list_todos():
    all_todos = [todo.make_into_dictionary() for todo in Todo.query.all()]
    return jsonify(todos=all_todos)

@app.route('/API/todos/<int:id>')
def get_todo(id):
    todo = Todo.query.get(id)
    return jsonify(todo=todo.make_into_dictionary())

@app.route('/API/todos', methods=['POST'])
def create_todo():
    new_todo = Todo(title=request.json["title"])
    db.session.add(new_todo)
    db.session.commit()
    return (jsonify(todo=new_todo.make_into_dictionary()), 201)

@app.route('/API/todos/<int:id>', methods=['PATCH'])
def update_todo(id):
    todo = Todo.query.get_or_404(id)
    todo.title = request.json.get('title', todo.title)
    todo.done = request.json.get('done', todo.done)
    # making sure that it's a .get so we can pass new info in and set other info to be the same if not changed
    db.session.commit()
    return jsonify(todo=todo.make_into_dictionary())


@app.route('/API/todos/<int:id>', methods=['DELETE'])
def delete_todo(id):
    todo = Todo.query.get_or_404(id)
    db.session.delete(todo)
    db.session.commit()
    return jsonify(message="Deleted")













