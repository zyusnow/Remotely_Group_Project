from .db import db
from datetime import datetime

class CartItem(db.Model):
    __tablename__ = 'cart_items'

    id = db.Column(db.Integer, primary_key=True)
    productId = db.Column(db.Integer,
        db.ForeignKey('products.id'), nullable=False)
    cartId = db.Column(db.Integer,
        db.ForeignKey('carts.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

    cart = db.relationship('Cart', back_populates='cart_item')
    product = db.relationship('Product', back_populates='cart_item')