from flask import Blueprint
from app.models import Category, db

category_routes = Blueprint('categories', __name__)

@category_routes.route('/')
def get_categories():
    categories = Category.query.all()
    categories = [category.to_dict() for category in categories]
    categories = sorted(categories, key=lambda d: d['name'])
    # sort to ensure it always follows the samee order

    return {'categories': categories}

@category_routes.route('/<categoryName>/')
def get_category(categoryName):
    category = Category.query.filter(Category.name == categoryName).one()
    return category.to_dict()
