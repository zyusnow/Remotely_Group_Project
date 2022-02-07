from app.models import db, Category

# Adds categories
def seed_categories():
    category1 = Category(
        id=1,
        name="Furniture"
    )

    db.session.add(category1)
    db.session.commit()

def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()