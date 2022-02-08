from app.models import db, Category

# Adds categories
def seed_categories():
    category01 = Category(
        name = 'Office Furniture'
    )
    category02 = Category(
        name = 'Computer Technology',
    )
    category03 = Category(
        name = 'Computer Accessories',
    )
    category04 = Category(
        name = 'Stationery & Office Supplies'
    )
    category05 = Category(
        name = 'Boards'
    )
    category06 = Category(
        name = 'Office Electronics'
    )


    db.session.add_all([category01, category02, category03, category04, category05, category06])
    db.session.commit()

def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
