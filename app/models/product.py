from .db import db

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    imageUrl = db.Column(db.string(255))
    price = db.Column(db.Integer(), nullable=False)
    quantity = db.Column(db.Integer(), nullable=False)
    userId = db.Column(db.Integer(),
        db.ForeignKey('users.id', nullable=False))
    categoryId = db.Column(db.Integer(),
        db.ForeignKey('categories.id'), nullable=False)
    createdAt = db.Column(db.Date(), nullable=False)
    updatedAt = db.Column(db.Date(), nullable=False)









    category = db.relationship('')
    user = db.relationship('')