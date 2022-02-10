from flask import Blueprint, request
from app.forms.search_form import SearchForm
from app.models import Product


search_routes = Blueprint('search', __name__)

@search_routes.route('/', methods=['POST'])
def search():
    print("######################before search results")
    form = SearchForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        query = form.data['search']
        if query != '':
            results = Product.query.filter(Product.name.like('%'+query+'%')).all()
        print("*************????????????",results)
        return results.to_dict()
