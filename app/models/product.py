from .db import db
from datetime import datetime

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    imageUrl = db.Column(db.String(500), nullable=False)
    price = db.Column(db.Float, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    userId = db.Column(db.Integer,
        db.ForeignKey('users.id'))
    categoryId = db.Column(db.Integer,
        db.ForeignKey('categories.id'))
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

    category = db.relationship('Category', back_populates='products')
    user = db.relationship('User', back_populates='products')
    order_items = db.relationship('OrderItem', back_populates='product')
    cart_items = db.relationship('CartItem', back_populates='product')
    reviews = db.relationship('Review', back_populates='product')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'imageUrl': self.imageUrl,
            'price': self.price,
            'quantity': self.quantity,
            'userId': self.userId,
            'user_name': self.user.username if self.user else None,
            'categoryId': self.categoryId,
            'category_name': self.category.name if self.category else None,
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt,
            'reviews': [review.to_dict() for review in self.reviews]
        }
