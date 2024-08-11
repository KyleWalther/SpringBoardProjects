from flask import Flask, request, render_template, redirect
from flask import session, make_response

app = Flask(__name__)


if __name__ == '__main__':
    app.secret_key = 'super_secret_key'  # Secret key required for using sessions
    app.run(debug=True)


@app.route('/index')
def home():
    return render_template('index.html')


@app.route('/fav-color', methods=['POST'])
def fav_color():
    fav_color = request.form.get('color')
    session['fav-color'] = fav_color
    return redirect('/color')


@app.route('/color')
def show_color():
     fav_color = session.get('fav_color')
     return render_template('colors.html', fav_color=fav_color)



