from flask import Flask, request


app = Flask(__name__)


@app.route('/')
def homepage():
    html = """
    <hmlt>
      <body>
        <h1> HOME PAGE!</h1>
        <p> This is the home page</p>
        <a href='/hello'>go to hello page</a>
      </body>
    </html>
      """
    return html
    

@app.route('/hello')
def say_hello():
    html = """
    <hmlt>
      <body>
        <h1> Hello!</h1>
        <p> This is the hello page</p>
      </body>
    </html>
      """
    return html

@app.route('/goodbye')
def goodbye():
    return "goodbye"

@app.route('/search')
def search():
    term = request.args['term']
    sort = request.args['sort']
    return f"<h1>Search results for: {term}</h1> <p>Sorting by: {sort}</p>"


# @app.route('/post', methods=['POST'])
# def post_demo():
#     return 'You made a post'

@app.route('/add-comment')
def add_comment_form():
    return """
    <h1>Add Comment </h1>
      <form method='POST'>
        <input type='text' placeholder='comment' name='comment'/>
        <input type='text' placeholder='username' name='username'/>
        <button>Submit</button>
      </form>
"""
@app.route('/add-comment', methods=['POST'])
def save_comment():
    print(request.form)
    comment = request.form['comment']
    return f"""
      <h1> save your comment with text of {comment}</h1>
"""

@app.route('/r/<subreddit>')
def show_subreddit(subreddit):
    return f'<h1>Browsing the {subreddit} subreddit</h1>'

@app.route('/r/<subreddit>/comment/<int:post_id>')
def show_comment(subreddit, post_id):
    return f'<h1>viewing comments for post wiht id {post_id} from the {subreddit} subreddit</h1>'


POSTS = {
    1: 'I like chicken tenders',
    2: 'I like tenders',
    3: 'I like cats',
    4: 'I like dogs',
}

@app.route('/posts/<int:id>')
def find_post(id):
    post = POSTS[id]
    return f"<p>{post}</p>"









