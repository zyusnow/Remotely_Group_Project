from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Cart, CartItem, Product
from app.forms.add_to_cart import AddToCartForm
from flask_login import current_user

cart_routes = Blueprint('cart', __name__)

@cart_routes.route('/<int:id>')
def cart(id):
    cartItems = CartItem.query.filter_by(cartId=id).join(Product).order_by(CartItem.createdAt).all()
    return jsonify([cartItem.to_dict() for cartItem in cartItems])


@cart_routes.route('/add', methods=['POST'])
def add_cart_item():
    form = AddToCartForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit:
        quantity = form.data['quantity']
        productId = form.data['productId']
        product = Product.query.get(productId)
        product.quantity -= 1
        cartItem = CartItem.query.filter_by(productId=productId, cartId=current_user.id).first()
        if not cartItem:
            cartItem = CartItem(
                productId=productId,
                cartId=current_user.id,
                quantity=1
            )
            db.session.add(cartItem)
        else:
            cartItem.quantity += 1
        db.session.commit()
    return cartItem.to_dict()

@cart_routes.route('/delete/<int:id>', methods=['DELETE'])
def delete_cart_item(id):
    cartItem = CartItem.query.get(id)
    if cartItem:
        db.session.delete(cartItem)
        db.session.commit()
    else:
        return jsonify({'message': 'Item does not exist in cart'})
    return jsonify({'message': 'Successfully Deleted Item'})

# Edit Cart Item Route
@cart_routes.route('/edit', methods=['PUT'])
def edit_cart_item():
    form = AddToCartForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit:
        quantity = form.data['quantity']
        productId = form.data['productId']
        cartItem = CartItem.query.filter_by(id=productId, cartId=current_user.id).first()
        cartItem.quantity = quantity
        db.session.add(cartItem)
        db.session.commit()
    return cartItem.to_dict()

#Clear Cart Route
@cart_routes.route('/clear/<int:id>', methods=['DELETE'])
def clear_cart(id):
    cart = Cart.query.get(id)
    if cart:
        cartItems = CartItem.query.filter_by(cartId=id).all()
        for cartItem in cartItems:
            db.session.delete(cartItem)
        db.session.commit()
    else:
        return jsonify({'message': 'Cart does not exist'})
    return jsonify({'message': 'Successfully Cleared Cart'})
