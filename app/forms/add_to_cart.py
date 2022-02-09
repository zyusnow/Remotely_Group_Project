from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired
from app.models import Product, CartItem, Cart

class AddToCartForm(FlaskForm):
  productId = IntegerField('productId', validators=[DataRequired()])
  quantity = IntegerField('quantity', validators=[DataRequired()])
