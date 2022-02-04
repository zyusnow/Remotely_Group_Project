from .db import db
from datetime import datetime

class Cart(db.Model):
    __tablename__ = 'carts'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer,
        db.ForeignKey('users.id'))
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

    cart_item = db.relationship('CartItem', back_populates='cart')
    user = db.relationship('User', back_populates='cart')