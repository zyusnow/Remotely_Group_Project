from .db import db

class Order(db.Model):
    __tablename__ = 'orders'

    id = db.Column(db.Integer(), primary_key=True)
    userId = db.Column(db.Integer(),
        db.ForeignKey('users.id', nullable=False))
    createdAt = db.Column(db.Date(), nullable=False)
    updatedAt = db.Column(db.Date(), nullable=False)