from app.models import db, Product

def seed_products():
  product01 = Product(
  title='Remotely Adjustable Height Desk',
  userId=1,
  imageUrl='https://res.cloudinary.com/bigtechnik/imageUrl/upload/v1644253577/Remotely/imageUrl_dalnxk.jpg',
  price = 399.99,
  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  quantity=10,
  )
  product02 = Product(
  title='Keychron K2 Keyboard',
  userId=1,
  imageUrl='https://res.cloudinary.com/bigtechnik/imageUrl/upload/v1644253526/Remotely/imageUrl_mhtykj.png',
  price = 100.00,
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  quantity=10,
  )
  product03 = Product(
  title='iPad Pro 12.9"',
  userId=1,
  imageUrl='https://res.cloudinary.com/bigtechnik/imageUrl/upload/v1644253487/Remotely/imageUrl_yrnqdn.png',
  price = 999.99,
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  quantity=10
  )
  product04 = Product(
    title='Apple Magic Keyboard -Space Gray',
    userId=1,
    imageUrl='https://res.cloudinary.com/bigtechnik/imageUrl/upload/v1644253515/Remotely/imageUrl_xqoaoa.png',
    price = 149.99,
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity=10
  )
  product05 = Product(
  title='ALT Over The Ear Headset',
  userId=1,
  imageUrl='https://res.cloudinary.com/bigtechnik/imageUrl/upload/v1644253404/Remotely/imageUrl_dgz2jl.jpg',
  price = 99.99,
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  quantity = 10
  )
  product06 = Product(
  title = 'Desktop Air Purifier',
  userId = 1,
  imageUrl='https://res.cloudinary.com/bigtechnik/imageUrl/upload/v1644254451/Remotely/imageUrl_upspw6.png',
  price = 199.99,
  description='Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  quantity=10
  )

  db.session.add(product01)
  db.session.add(product02)
  db.session.add(product03)
  db.session.add(product04)
  db.session.add(product05)
  db.session.add(product06)
  db.session.commit()

def undo_products():
  db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
  db.session.commit()