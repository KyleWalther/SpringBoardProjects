from models import db, connect_db, Cupcake
from app import app

db.drop_all()
db.create_all()

id = db.Column(db.Integer, primary_key=True, autoincrement=True)
flavor = db.Column(db.String, nullable=False)
size = db.Column(db.String, nullable=False)
rating = db.Column(db.Float, nullable=False)
image = db.Column(db.String, nullable=False, default='https://tinyurl.com/demo-cupcake')

ck1 = [
    Cupcake(flavor='strawberry', size='small', rating=9.4, image=None),
    Cupcake(flavor='vanilla', size='large', rating=6.42, image=None),
    Cupcake(flavor='chocolate', size='small', rating=7.33, image=None),
    Cupcake(flavor='berry', size='medium', rating=3.4, image=None),
    Cupcake(flavor='caramel', size='medium', rating=10.0, image=None)
] 

db.session.add_all(ck1)
db.session.commit()





