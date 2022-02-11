from app.models import db, Product

def seed_products():
  product01 = Product(
    title='Remotely Adjustable Height Desk',
    userId=1,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644253577/Remotely/image_dalnxk.jpg',
    price = 399.99,
    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    quantity=10,
    categoryId=1,
  )
  product02 = Product(
    title='Keychron K2 Keyboard',
    userId=5,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644253526/Remotely/image_mhtykj.png',
    price = 100.00,
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity=10,
    categoryId=3,
  )
  product03 = Product(
    title='iPad Pro 12.9"',
    userId=1,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644253487/Remotely/image_yrnqdn.png',
    price = 999.99,
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity=10,
    categoryId=2,
  )
  product04 = Product(
    title='Apple Magic Keyboard -Space Gray',
    userId=3,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644253515/Remotely/image_xqoaoa.png',
    price = 149.99,
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity=10,
    categoryId=3,
  )
  product05 = Product(
    title='ALT Over The Ear Headset',
    userId=1,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644253404/Remotely/image_dgz2jl.jpg',
    price = 99.99,
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity = 10,
    categoryId=3,
  )
  product06 = Product(
    title = 'Desktop Air Purifier',
    userId = 1,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644254451/Remotely/image_upspw6.png',
    price = 199.99,
    description='Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity=10,
    categoryId=8,
  )
  product07 = Product(
    title = 'L Shaped Office Desk',
    userId = 2,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644421335/Remotely/image_jmmg3t.jpg',
    price = 489.99,
    description='Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity=10,
    categoryId=1
  )
  product08 = Product(
    title = 'Leather Executive Chair',
    userId = 1,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644421311/Remotely/image_beprjd.jpg',
    price = 299.99,
    description='Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity=10,
    categoryId=1
  )
  product09 = Product(
    title = 'Office Chair',
    userId = 1,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644421316/Remotely/image_mvksla.jpg',
    price = 199.99,
    description='Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity=10,
    categoryId=1
  )
  product10 = Product(
    title = 'Moleskine Lined Notebook XL',
    userId = 4,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644421939/Remotely/image_b0u3dt.jpg',
    price=24.99,
    description='Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity=10,
    categoryId=4
  )
  product11 = Product(
    title='24" x 36" Whiteboard',
    userId=1,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644421219/Remotely/image_smki1y.png',
    price=149.99,
    description='Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity=10,
    categoryId=5
  )
  product12 = Product(
    title= '72" x 36" Whiteboard',
    userId=9,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644421223/Remotely/image_pjedx7.jpg',
    price=299.99,
    description='Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity=10,
    categoryId=5
  )
  product13 = Product(
    title = 'Sharpie S-Note - 24 pack',
    userId = 2,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644436803/Remotely/image_rzzzpf.jpg',
    price = 9.99,
    description='Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity=10,
    categoryId=4
  )
  product14 = Product(
    title = 'Epson Workforce Pro WF-4830 Wireless Color Inkjet All-In-One Printer',
    userId = 3,
    imageUrl='https://res.cloudinary.com/dikzc7kwd/image/upload/v1644539115/epson-printer_xnaayk.webp',
    price = 219.99,
    description='Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity=10,
    categoryId=6
  )
  product15 = Product(
    title = 'Realspace 36"W Steel 5-Shelf Cabinet, Black',
    userId = 7,
    imageUrl='https://res.cloudinary.com/dikzc7kwd/image/upload/v1644539165/office-cupboard_hmi54u.webp',
    price = 359.99,
    description='Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity=10,
    categoryId=7
  )
  product16 = Product(
    title = 'LG 32" Class QHD IPS Monitor',
    userId = 3,
    imageUrl='https://res.cloudinary.com/dikzc7kwd/image/upload/v1644539212/lg-monitor_xxc1fd.jpg',
    price = 219.99,
    description='Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity=10,
    categoryId=2
  )
  product17 = Product(
    title = 'HP 14a-na0122od Chromebook, 14" Screen, Intel® Pentium®, 4GB Memory',
    userId = 2,
    imageUrl='https://res.cloudinary.com/dikzc7kwd/image/upload/v1644539248/hp-laptop_ptxg8h.webp',
    price = 289.99,
    description='Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity=15,
    categoryId=2
  )
  product18 = Product(
    title = 'Samsung Galaxy Tab A7 Tablet, 8.7" Touchscreen, 32GB Storage, Grey/Black',
    userId = 5,
    imageUrl='https://res.cloudinary.com/dikzc7kwd/image/upload/v1644539339/samsung-tablet_mpgbrc.webp',
    price = 129.99,
    description="Meet the device your whole family will love: Samsung Galaxy Tab A7 Lite, thetablet that's made to be shared. With its compact 8.7 inch screen, Galaxy Tab A7 Liteis perfectly sized for entertainment on the go. Its sturdy metal frame is built tobe brought along from the living room to your beach vacation, or wherever youwant to take it. Galaxy Tab A7 Lite comes with 2-months of free YouTube Premium¹and access to hours of ad-free entertainment so you can keep everyone happywithout annoying interruptions. Plus, with a powerful processor for fast streamingand plenty of storage for your favorite files, Galaxy Tab A7 Lite simplifiesentertainment needs for everyone under your roof.",
    quantity=10,
    categoryId=2
  )
  product29 = Product(
    title = 'Samsung Galaxy Tab A7 Tablet, 8.7" Touchscreen, 32GB Storage, Grey/Black',
    userId = 5,
    imageUrl='https://res.cloudinary.com/dikzc7kwd/image/upload/v1644539339/samsung-tablet_mpgbrc.webp',
    price = 129.99,
    description="Meet the device your whole family will love: Samsung Galaxy Tab A7 Lite, thetablet that's made to be shared. With its compact 8.7 inch screen, Galaxy Tab A7 Liteis perfectly sized for entertainment on the go. Its sturdy metal frame is built tobe brought along from the living room to your beach vacation, or wherever youwant to take it. Galaxy Tab A7 Lite comes with 2-months of free YouTube Premium¹and access to hours of ad-free entertainment so you can keep everyone happywithout annoying interruptions. Plus, with a powerful processor for fast streamingand plenty of storage for your favorite files, Galaxy Tab A7 Lite simplifiesentertainment needs for everyone under your roof.",
    quantity=10,
    categoryId=2
  )


  db.session.add(product01)
  db.session.add(product02)
  db.session.add(product03)
  db.session.add(product04)
  db.session.add(product05)
  db.session.add(product06)
  db.session.add(product07)
  db.session.add(product08)
  db.session.add(product09)
  db.session.add(product10)
  db.session.add(product11)
  db.session.add(product12)
  db.session.add(product13)
  db.session.add(product14)
  db.session.add(product15)
  db.session.add(product16)
  db.session.add(product17)
  db.session.add(product18)

  db.session.commit()

def undo_products():
  db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
  db.session.commit()
