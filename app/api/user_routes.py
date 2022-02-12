from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, db, Product
from app.forms import SignUpForm

user_routes = Blueprint('users', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    products = Product.query.filter_by(userId=id).all()
    return {'user': user.to_dict(), 'products': [product.to_dict() for product in products]}

@user_routes.route('/edit/<int:id>')
@login_required
def edit_user_info(id):
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        edited_user = User.query.get(id)
        edited_user.username = form.data['username']
        edited_user.email = form.data['email']
        edited_user.password = form.data['password']
        edited_user.repeatPassword = form.data['repeatPassword']
        db.session.add(edited_user)
        db.session.commit()
        return edited_user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@user_routes.route('/delete/<int:id>')
@login_required
def delete_user(id):
    user = User.query.get(id)
    user.delete()
    return {'message': 'User deleted'}
