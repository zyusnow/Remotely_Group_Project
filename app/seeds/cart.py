from app.models import db, Cart

def seed_cart():
  cart01 = Cart(
    userId = 1
  )
  cart02 = Cart(
    userId = 2
  )
  cart03 = Cart(
    userId = 3
  )
  cart04 = Cart(
    userId = 4
  )
  cart05 = Cart(
    userId = 5
  )
  cart06 = Cart(
    userId = 6
  )
  cart07 = Cart(
    userId = 7
  )
  cart08 = Cart(
    userId = 8
  )
  cart09 = Cart(
    userId = 9
  )
  cart10 = Cart(
    userId = 10
  )

  db.session.add_all([cart01, cart02, cart03, cart04, cart05, cart06, cart07, cart08, cart09, cart10])
  db.session.commit()

