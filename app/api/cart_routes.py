from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Cart, CartItem

cart_routes = Blueprint('cart', __name__)

@cart_routes.route('/<int:id>')
# @login_required
def cart(id):
    cart = Cart.query.get(id)
    cartItems = CartItem.query.filter_by(cart_id=id).all()
    return jsonify({'cart': cart.to_dict(), 'cartItems': [cartItem.to_dict() for cartItem in cartItems]})

