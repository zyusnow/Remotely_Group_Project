from flask_wtf import FlaskForm
from wtforms import IntegerField, TextAreaField
from wtforms.validators import DataRequired, NumberRange


class ReviewForm(FlaskForm):
    rating = IntegerField('rating', validators=[DataRequired(), NumberRange(min=1, max=5, message='Rating must be between 1 and 5')])
    comment = TextAreaField('comment')