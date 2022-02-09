from .db import db
from datetime import datetime

class CartItem(db.Model):
    __tablename__ = 'cart_items'

    id = db.Column(db.Integer, primary_key=True)
    productId = db.Column(db.Integer,
        db.ForeignKey('products.id'))
    cartId = db.Column(db.Integer,
        db.ForeignKey('carts.id'))
    quantity = db.Column(db.Integer, nullable=False)
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

    cart = db.relationship('Cart', back_populates='cart_items')
    product = db.relationship('Product', back_populates='cart_items')

    def to_dict(self):
        return {
            'id': self.id,
            'productId': self.productId,
            'cartId': self.cartId,
            'quantity': self.quantity,
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt
        }
