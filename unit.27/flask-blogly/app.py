from flask import Flask, request, redirect, render_template
from models import db, connect_db, User, Post, Tag

app = Flask(__name__)

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

# Connect to the database
connect_db(app)

# Routes
@app.route('/')
def list_users():
    users = User.query.all()
    return render_template('home.html', users=users)

@app.route('/add', methods=['GET', 'POST'])
def add_user():
    if request.method == 'POST':
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        image_url = request.form['image_url'] or None

        new_user = User(first_name=first_name, last_name=last_name, image_url=image_url)
        db.session.add(new_user)
        db.session.commit()
        return redirect('/')
    
    return render_template('add_user.html')

@app.route('/user/<int:user_id>')
def show_user(user_id):
    user = User.query.get_or_404(user_id)
    return render_template('user_detail.html', user=user)

@app.route('/user/<int:user_id>/edit', methods=['GET', 'POST'])
def edit_user(user_id):
    user = User.query.get_or_404(user_id)
    if request.method == 'POST':
        user.first_name = request.form['first_name']
        user.last_name = request.form['last_name']
        user.image_url = request.form['image_url'] or user.image_url
        db.session.commit()
        return redirect(f'/user/{user_id}')
    
    return render_template('edit_user.html', user=user)

@app.route('/user/<int:user_id>/delete', methods=['POST'])
def delete_user(user_id):
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    return redirect('/')

@app.route('/users/<int:user_id>/post_form/new')
def create_post(user_id):
    user = User.query.get_or_404(user_id)
    tags = Tag.query.all()
    return render_template('new_post_form.html', user=user, tags=tags)

@app.route('/users/<int:user_id>/posts/new', methods=["POST"])
def post_new_post(user_id):
    user = User.query.get_or_404(user_id)
    title = request.form['title']
    content = request.form['content']
    tag_names = request.form.getlist('tags')  # Get tags from form as a list

    # Create a new post
    new_post = Post(title=title, content=content, user=user)

    # Associate tags with the post
    for tag_name in tag_names:
        tag_name = tag_name.strip()  # Remove leading/trailing whitespace
        if tag_name:
            tag = Tag.query.filter_by(name=tag_name).first()
            if not tag:
                tag = Tag(name=tag_name)
                db.session.add(tag)
            new_post.tags.append(tag)

    db.session.add(new_post)
    db.session.commit()

    return redirect(f"/user/{user_id}")

@app.route('/posts/<int:post_id>')
def show_post(post_id):
    post = Post.query.get_or_404(post_id)
    return render_template('post_detail.html', post=post)

@app.route('/posts/<int:post_id>/edit', methods=['GET', 'POST'])
def edit_post(post_id):
    post = Post.query.get_or_404(post_id)
    if request.method == 'POST':
        post.title = request.form['title']
        post.content = request.form['content']
        tag_names = request.form.getlist('tags')  # Get tags from form as a list

        # Clear existing tags
        post.tags.clear()

        # Associate new tags with the post
        for tag_name in tag_names:
            tag_name = tag_name.strip()  # Remove leading/trailing whitespace
            if tag_name:
                tag = Tag.query.filter_by(name=tag_name).first()
                if not tag:
                    tag = Tag(name=tag_name)
                    db.session.add(tag)
                post.tags.append(tag)

        db.session.commit()
        return redirect(f'/posts/{post_id}')
    
    tags = Tag.query.all()
    return render_template('edit_post.html', post=post, tags=tags)

@app.route('/create_tag', methods=['GET', 'POST'])
def make_tag():
    if request.method == 'POST':
        name = request.form['name']

        # Create a new tag regardless of whether it exists or not
        new_tag = Tag(name=name)
        db.session.add(new_tag)
        db.session.commit()

        # Redirect to the tags listing page after creating a tag
        return redirect('/tags')

    return render_template('create_tag.html')

@app.route('/tags')
def list_tags():
    tags = Tag.query.all()
    return render_template('list_tags.html', tags=tags)

@app.route('/tags/<int:tag_id>')
def show_tag(tag_id):
    tag = Tag.query.get_or_404(tag_id)
    return render_template('tag_detail.html', tag=tag)

if __name__ == '__main__':
    app.run(debug=True)
