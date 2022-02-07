from flask_wtf import FlaskForm
from wtforms import StringField, URLField, DecimalField, IntegerField, SelectField
from wtforms.validators import DataRequired, Length, URL, NumberRange, ValidationError
from app.models import Category

categories_list = Category.query.all()
categories =[(category.name, category.id) for category in categories_list]

class ProductForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired(), Length(min=1, max=100, message="Title must be less than 100 characters")])
    description = StringField('Description', validators=[DataRequired(), Length(min=1, max=255, message="Description must be less than 255 characters")])
    imageUrl = URLField('Image', validators=[DataRequired(), Length(min=1, max=255, message="Image URL must be less than 255 characters"), URL(message="Plese enter a valid URL")])
    price = DecimalField('Price', validators=[DataRequired()], places=2)
    quantity = IntegerField('Quantity', validators=[DataRequired(), NumberRange(min=1, message="Please enter a valid quantity")])
    category = SelectField('Category', choices=categories, validators=[DataRequired()])

