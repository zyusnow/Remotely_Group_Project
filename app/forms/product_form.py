from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, Length, NumberRange



class ProductForm(FlaskForm):
    title = StringField('title', validators=[DataRequired(), Length(min=1, max=100, message="Title must be less than 100 characters")])
    description = TextAreaField('description', validators=[DataRequired(), Length(min=1, max=1000, message="Description must be less than 1000 characters")])
    imageUrl = StringField('image', validators=[DataRequired(), Length(min=1, max=500, message="Image URL must be less than 500 characters")])
    price = DecimalField('price', validators=[DataRequired()], places=2)
    quantity = IntegerField('quantity', validators=[DataRequired(), NumberRange(min=1, message="Please enter a valid quantity")])
    categoryId = IntegerField('categoryId', validators=[DataRequired()])
