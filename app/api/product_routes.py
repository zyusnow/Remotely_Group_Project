from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import Product, db
from app.forms import ProductForm

product_routes = Blueprint('products', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@product_routes.route('/')
def get_products():
    products = Product.query.all()
    return {'products': [product.to_dict() for product in products]}

@product_routes.route('/<int:id>/')
def get_product(id):
    product = Product.query.get(id)
    return product.to_dict()


@product_routes.route('/new/', methods=['POST'])
@login_required
def add_product():
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_product = Product(
            title = form.data['title'],
            description = form.data['description'],
            imageUrl = form.data['imageUrl'],
            price = form.data['price'],
            quantity = form.data['quantity'],
            categoryId = int(form.data['categoryId']),
            userId = int(current_user.id)
        )
        db.session.add(new_product)
        db.session.commit()
        return new_product.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@product_routes.route('/delete/<int:id>', methods=['DELETE'])
def delete(id):
    product_to_delete = Product.query.get(id)
    db.session.delete(product_to_delete)
    db.session.commit()
    return ("Delete Sucessfully!")

@product_routes.route('/edit/<int:id>', methods=['PUT'])
def edit(id):
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        product_to_edit = Product.query.get(id)
        product_to_edit.title = form.data['title']
        product_to_edit.description = form.data['description']
        product_to_edit.imageUrl = form.data['imageUrl']
        product_to_edit.price = form.data['price']
        product_to_edit.quantity = form.data['quantity']
        product_to_edit.categoryId = form.data['categoryId']
        product_to_edit.userId = int(current_user.id)
        db.session.add(product_to_edit)
        db.session.commit()
        return product_to_edit.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@product_routes.route('/top/')
def top_products():
    products = Product.query.order_by(Product.createdAt).limit(16)
    return {'products': [product.to_dict() for product in products]}
