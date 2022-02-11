from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Cart, CartItem, Product
from app.forms.add_to_cart import AddToCartForm
from flask_login import current_user

cart_routes = Blueprint('cart', __name__)

@cart_routes.route('/<int:id>')
def cart(id):
    #  TODO: alter this query to join products table
    cart = Cart.query.get(id)
    cartItems = CartItem.query.filter_by(cartId=id).join(Product).all()
    total = 0
    for cartItem in cartItems:
        total += cartItem.product.price * cartItem.quantity
    return jsonify({'total': total, 'cartItems': [cartItem.to_dict() for cartItem in cartItems]})

# Add Product To Cart
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

# Delete Product From Cart
@cart_routes.route('/delete/<int:id>', methods=['DELETE'])
def delete_cart_item(id):
    cartItem = CartItem.query.get(id)
    if cartItem:
        db.session.delete(cartItem)
        db.session.commit()
    else:
        return jsonify({'message': 'Item does not exist in cart'})
    return('Successfully Deleted Item')

# Edit Cart Item Quantity
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

# Clear Cart
@cart_routes.route('/clear', methods=['DELETE'])
def clear_cart(id):
    cartItems = CartItem.query.filter_by(cartId=id).all()
    for cartItem in cartItems:
        db.session.delete(cartItem)
    db.session.commit()
    return('Successfully Cleared Cart')

# Get Cart Total - Not Needed
# @cart_routes.route('/total/<int:id>', methods=['GET'])
# def get_cart_total(id):
#     cartItems = CartItem.query.filter_by(cartId=current_user.id).all()
#     total = 0
#     for cartItem in cartItems:
#         total += cartItem.product.price * cartItem.quantity
#     return jsonify({'total': total})
