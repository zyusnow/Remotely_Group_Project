from .db import db
from datetime import datetime

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    productId = db.Column(db.Integer,
        db.ForeignKey('products.id'), nullable=False)
    userId = db.Column(db.Integer,
        db.ForeignKey('users.id'))
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.String(2000))
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

    user = db.relationship('User', back_populates='reviews')
    product = db.relationship('Product', back_populates='reviews')

    def to_dict(self):
        return {
            'id': self.id,
            'productId': self.productId,
            'userId': self.userId,
            'rating': self.rating,
            'comment': self.comment,
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt
        } 
