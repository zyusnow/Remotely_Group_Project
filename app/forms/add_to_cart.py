from flask_wtf import FlaskForm
from wtforms import IntegerField, HiddenField
from wtforms.validators import DataRequired

class AddToCartForm(FlaskForm):
  quantityInStock = IntegerField('quantityInStock', validators=[DataRequired()])
  productId = IntegerField('productId', validators=[DataRequired()])
  quantity = IntegerField('quantity', validators=[DataRequired()])
