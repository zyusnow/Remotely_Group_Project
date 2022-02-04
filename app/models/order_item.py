from .db import db
from datetime import datetime

class OrderItem(db.Model):
    __tablename__ = 'order_items'

    id = db.Column(db.Integer, primary_key=True)
    productId = db.Column(db.Integer,
        db.ForeignKey('products.id'))
    orderId = db.Column(db.Integer,
        db.ForeignKey('orders.id'))
    quantity = db.Column(db.Integer, default=1, nullable=False)
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

    order = db.relationship('Order', back_populates='order_items')
    product = db.relationship('Product', back_populates='order_items')