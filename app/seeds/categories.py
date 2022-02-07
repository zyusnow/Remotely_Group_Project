from app.models import db, Category

# Adds categories
def seed_categories():
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

def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()