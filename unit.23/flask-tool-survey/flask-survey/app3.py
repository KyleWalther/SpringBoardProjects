from flask import Flask, request, render_template, redirect
from flask import session, make_response

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')




