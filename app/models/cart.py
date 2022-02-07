from .db import db
from datetime import datetime

class Cart(db.Model):
    __tablename__ = 'carts'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer,
        db.ForeignKey('users.id'))
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

    cart_items = db.relationship('CartItem', back_populates='cart')
    user = db.relationship('User', back_populates='cart')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt
        }

  
