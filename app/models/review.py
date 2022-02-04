from .db import db

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer(), primary_key=True)
    productId = db.Column(db.Integer(),
        db.ForeignKey('products.id'), nullable=False)
    userId = db.Column(db.Integer(),
        db.ForeignKey('users.id', nullable=False))
    rating = db.Column(db.Integer(), nullable=False)
    comment = db.Column(db.String(2000))
    createdAt = db.Column(db.Date(), nullable=False)
    updatedAt = db.Column(db.Date(), nullable=False)