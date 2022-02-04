from .db import db

class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    createdAt = db.Column(db.Date(), nullable=False)
    updatedAt = db.Column(db.Date(), nullable=False)
