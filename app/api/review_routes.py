from flask import Blueprint, request, redirect
from flask_login import login_required, current_user
from app.models import Review, db
from app.forms import ReviewForm

review_routes = Blueprint('reviews', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@review_routes.route('/')
def get_reviews():
    reviews = Review.query.all()
    return {'reviews': [review.to_dict() for review in reviews]}


@review_routes.route('/new', methods=['POST'])
@login_required
def add_review():
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_review = Review(
            rating = form.data['rating'],
            comment = form.data['comment'],
            userId = int(current_user.id),
            productId = int(form.data['productId'])
        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@review_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_review():
    review = Review.query.get(id)

    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        review.rating = form.data['rating'],
        review.comment = form.data['comment'],
        review.productId = int(form.data['productId']),

        db.session.commit()
        return review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401 

@review_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_review():
    review = Review.query.get(id)
    if int(current_user.id) == review.userId:
        db.session.delete(review)
        db.session.commit()
        return "Delete successful"
    else:
        return 401
