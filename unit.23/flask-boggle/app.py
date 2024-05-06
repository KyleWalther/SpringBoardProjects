from boggle import Boggle
from flask import Flask, request, render_template, redirect, session, jsonify



app = Flask(__name__)
app.config["SECRET_KEY"] = "4534gdghjk5d#$RGR^HDG"




boggle_game = Boggle()


@app.route('/')
def main_page():
    session['total_score'] = 0
    board = boggle_game.make_board()
    session['board'] = board
    return render_template('game.html', board=board)



submitted_words = set()

@app.route('/submit-form', methods=['POST'])
def submit_form():
    data = request.json.get('data')
    
    # Check if the word has already been submitted
    if data in submitted_words:
        return jsonify(result="already-submitted", total_score=session['total_score'])
    
    # If the word is not already submitted, proceed with validation
    result, word_length = boggle_game.check_valid_word(session['board'], data)
    
    if result == "ok":
        session['total_score'] += word_length  # Add the length of the valid word to the total score stored in the session
        submitted_words.add(data)  # Add the word to the set of submitted words
        return jsonify(result=result, word_length=word_length, total_score=session['total_score'])
    else:
        return jsonify(result=result, total_score=session['total_score'])














