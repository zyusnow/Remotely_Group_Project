from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Cart

cart_routes = Blueprint('cart', __name__)

@cart_routes.route('/<int:id>')
@login_required
def cart(id):
    cart = Cart.query.get(id)
    jsonify(cart.to_dict())
    return '<h1>Cart Route Working, Yay!</h1>'
