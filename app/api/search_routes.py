from flask import Blueprint, request
from app.models import Product

search_routes = Blueprint('search', __name__)

@search_routes.route('/<q>/')
def search(q):
    # term = request.args.get('q')
    searchResult = Product.query.filter(Product.title.ilike(f'%{q}%')).all()
    if searchResult:
        result = { product.id : product.to_dict() for product in searchResult }
        return { "products" : result }
    else:
        return { "products" : {} }
