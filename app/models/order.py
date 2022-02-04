from .db import db
from datetime import datetime

class Order(db.Model):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer,
        db.ForeignKey('users.id', nullable=False))
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

    order_items = db.relationship('OrderItem', back_populates='order')
    user = db.relationship('User', back_populates='orders')