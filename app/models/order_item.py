from .db import db

class OrderItem(db.Model):
    __tablename__ = 'order_items'

    id = db.Column(db.Integer(), primary_key=True)
    productId = db.Column(db.Integer(),
        db.ForeignKey('products.id'), nullable=False)
    orderId = db.Column(db.Integer(),
        db.ForeignKey('orders.id'), nullable=False)
    quantity = db.Column(db.Integer(), nullable=False)
    createdAt = db.Column(db.Date(), nullable=False)
    updatedAt = db.Column(db.Date(), nullable=False)