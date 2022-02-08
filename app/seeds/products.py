from app.models import db, Product

def seed_products():
  product01 = Product(
  title='Remotely Adjustable Height Desk',
  userId=1,
  imageUrl='https://res.cloudinary.com/dprnsux1z/image/upload/v1644296197/thestandingdesk-_mpablfu5pM-unsplash_m2snt5.jpg',
  price = 399.99,
  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  quantity=10,
  categoryId=1,
  )
  product02 = Product(
  title='Keychron K2 Keyboard',
  userId=1,
  imageUrl='https://res.cloudinary.com/dprnsux1z/image/upload/v1644295664/nafis-al-sadnan-w6t471f3bBs-unsplash_zustbe.jpg',
  price = 100.00,
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  quantity=10,
  categoryId=3,
  )
  product03 = Product(
  title='iPad Pro 12.9"',
  userId=1,
  imageUrl='https://res.cloudinary.com/dprnsux1z/image/upload/v1644296070/daniel-romero-Z4_kN9ybLf4-unsplash_cwtd7k.jpg',
  price = 999.99,
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  quantity=10,
  categoryId=2,
  )
  product04 = Product(
    title='Apple Magic Keyboard -Space Gray',
    userId=1,
    imageUrl='https://res.cloudinary.com/dprnsux1z/image/upload/v1644296351/ramiro-mendes-CjS3QsRuxnE-unsplash_yqyi3u.jpg',
    price = 149.99,
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity=10,
    categoryId=3,
  )
  product05 = Product(
  title='ALT Over The Ear Headset',
  userId=1,
  imageUrl='https://res.cloudinary.com/dprnsux1z/image/upload/v1644296468/c-d-x-PDX_a_82obo-unsplash_vylypt.jpg',
  price = 99.99,
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  quantity = 10,
  categoryId=3,
  )
  product06 = Product(
  title = 'Desktop Air Purifier',
  userId = 1,
  imageUrl='https://res.cloudinary.com/dprnsux1z/image/upload/v1644296542/alvaro-bernal-_Ib-JulMgzo-unsplash_soeosh.jpg',
  price = 199.99,
  description='Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  quantity=10,
  categoryId=3,
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
