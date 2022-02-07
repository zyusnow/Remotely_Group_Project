from app.models import db, CartItem

def seed_cart_items():
  cartItem1 = CartItem(
    productId = 1,
    cartId = 1,
    quantity = 1
  )
  cartItem2 = CartItem(
    productId = 5,
    cartId = 1,
    quantity = 1
  )
  cartItem3 = CartItem(
    productId = 2,
    cartId= 1,
    quantity = 1
  )
  cartItem4 = CartItem(
    productId = 3,
    cartId = 2,
    quantity = 1
  )
  cartItem5 = CartItem(
    productId = 4,
    cartId = 2,
    quantity = 1
  )
  cartItem6 = CartItem(
    productId = 5,
    cartId = 2,
    quantity = 1
  )
  cartItem7 = CartItem(
    productId = 6,
    cartId = 2,
    quantity = 1
  )

  db.session.add_all([cartItem1, cartItem2, cartItem3, cartItem4, cartItem5, cartItem6, cartItem7])
  db.session.commit()

def undo_cart_items():
  db.session.execute('TRUNCATE cart_item RESTART IDENTITY CASCADE;')
  db.session.commit()
