from flask import Flask, request, render_template
from stories import story

app = Flask(__name__)


@app.route('/')
def home():
    prompts = story.prompts
    return render_template('home.html', prompts=prompts)

@app.route('/madlib', methods=['GET'])
def finshed():
    text = story.generate(request.args)
    return render_template('madlib.html', text=text)