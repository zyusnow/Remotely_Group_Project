from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Cart, CartItem

cart_routes = Blueprint('cart', __name__)

@cart_routes.route('/<int:id>')
def cart(id):
    cart = Cart.query.get(id)
    cartItems = CartItem.query.filter_by(cartId=id).all()
    return jsonify([cartItem.to_dict() for cartItem in cartItems])
