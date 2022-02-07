from unicodedata import category
from app.models import db, Category

def seed_category():
    category01 = Category(
        name = 'Office Furniture',
    )
    category02 = Category(
        name = 'Electronic',
    )
    category03 = Category(
        name = 'Stationery'
    )

    db.session.add_all([category01, category02, category03])
    db.session.commit()

def undo_product():
  db.session.execute('TRUNCATE cart RESTART IDENTITY CASCADE;')
  db.session.commit()
