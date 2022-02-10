from app.models import db, Cart

def seed_cart():
  cart01 = Cart(
    userId = 1,
  )
  cart02 = Cart(
    userId = 2
  )
  cart03 = Cart(
    userId = 3
  )

  db.session.add_all([cart01, cart02, cart03])
  db.session.commit()

