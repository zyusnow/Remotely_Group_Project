from flask import Blueprint, request
# from app.forms.search_form import SearchForm
from app.models import Product

search_routes = Blueprint('search', __name__)

@search_routes.route('/')
def search():
    print("######################before search results")
    term = request.args.get('term')
    results = Product.query.filter(Product.name.like('%'+term+'%')).all()
    print("*************????????????",results)
    return results.to_dict()
