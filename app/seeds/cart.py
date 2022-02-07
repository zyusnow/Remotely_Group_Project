from app.models import db, Cart

def seed_cart():
  cart01 = Cart(
    userId = 1,
  )
  cart02 = Cart(
    userId = 2
  )

  db.session.add_all([cart01, cart02])
  db.session.commit()

def undo_cart():
  db.session.execute('TRUNCATE cart RESTART IDENTITY CASCADE;')
  db.session.commit()
