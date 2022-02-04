from .db import db

class CartItem(db.Model):
    __tablename__ = 'cart_items'

    id = db.Column(db.Integer(), primary_key=True)
    productId = db.Column(db.Integer(),
        db.ForeignKey('products.id'), nullable=False)
    cartId = db.Column(db.Integer(),
        db.ForeignKey('carts.id'), nullable=False)
    quantity = db.Column(db.Integer(), nullable=False)
    createdAt = db.Column(db.Date(), nullable=False)
    updatedAt = db.Column(db.Date(), nullable=False)