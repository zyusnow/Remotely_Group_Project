from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Cart

cart_routes = Blueprint('cart', __name__)

@cart_routes.route('/<int:id>')
def cart(id):
    cart = Cart.query.get(id)
    return jsonify(cart.to_dict())
