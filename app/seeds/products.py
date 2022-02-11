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
  userId=1,
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
    userId=1,
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
    userId = 1,
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
    userId=1,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644421223/Remotely/image_pjedx7.jpg',
    price=299.99,
    description='Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity=10,
    categoryId=5
  )
  product13 = Product(
    title = 'Sharpie S-Note - 24 pack',
    userId = 1,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644436803/Remotely/image_rzzzpf.jpg',
    price = 9.99,
    description='Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity=10,
    categoryId=4
  )
  product14 = Product(
    title = 'Epson® Workforce® Pro WF-4830 Wireless Color Inkjet All-In-One Printer',
    userId = 3,
    imageUrl='https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/9940280/9940280_o01_051121/9940280_o01_051121',
    price = 219.99,
    description='Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity=10,
    categoryId=6
  )
  product15 = Product(
    title = 'Realspace® 36"W Steel 5-Shelf Cabinet, Black',
    userId = 7,
    imageUrl='https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/945822/945822_o01_120720/945822_o01_120720',
    price = 359.99,
    description='Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity=10,
    categoryId=7
  )
  product16 = Product(
    title = 'LG 32" Class QHD IPS Monitor',
    userId = 3,
    imageUrl='https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=8325500-847&recipeName=352&viewId=1',
    price = 219.99,
    description='Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity=10,
    categoryId=2
  )
  product17 = Product(
    title = 'HP 14a-na0122od Chromebook, 14" Screen, Intel® Pentium®, 4GB Memory',
    userId = 2,
    imageUrl='https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/3847496/3847496_o01/3847496_o01',
    price = 289.99,
    description='Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity=15,
    categoryId=2
  )
  product18 = Product(
    title = 'Samsung Galaxy Tab A7 Tablet, 8.7" Touchscreen, 32GB Storage, Grey/Black',
    userId = 5,
    imageUrl='https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/7356427/7356427_o01_102821/7356427_o01_102821',
    price = 129.99,
    description="Meet the device your whole family will love: Samsung Galaxy Tab A7 Lite, thetablet that's made to be shared. With its compact 8.7 inch screen, Galaxy Tab A7 Liteis perfectly sized for entertainment on the go. Its sturdy metal frame is built tobe brought along from the living room to your beach vacation, or wherever youwant to take it. Galaxy Tab A7 Lite comes with 2-months of free YouTube Premium¹and access to hours of ad-free entertainment so you can keep everyone happywithout annoying interruptions. Plus, with a powerful processor for fast streamingand plenty of storage for your favorite files, Galaxy Tab A7 Lite simplifiesentertainment needs for everyone under your roof.",
    quantity=10,
    categoryId=2
  )
  product19 = Product(
    title = 'Stor/File™ Medium-Duty Storage Boxes',
    userId = 8,
    imageUrl='https://res.cloudinary.com/dprnsux1z/image/upload/v1644538704/329004_o01_020222_1_iswuqh.webp',
    price = 34.49,
    description="Older documents are still important to your business, but don't require daily access. To keep everything neat, store paperwork in Bankers Box FastFold boxes. These boxes provide medium-duty strength when used with or without shelving to suit your setup.",
    quantity=100,
    categoryId=7
  )

  product20 = Product(
    title = 'Home office storage',
    userId = 8,
    imageUrl='https://res.cloudinary.com/dprnsux1z/image/upload/v1644539062/Brenton-Studio-Unbreakable-3-Pocket-Letter_v4celi.jpg',
    price = 14.99,
    description="https://res.cloudinary.com/dprnsux1z/image/upload/v1644539062/Brenton-Studio-Unbreakable-3-Pocket-Letter_v4celi.jpg",
    quantity=100,
    categoryId=7
  )

  product21 = Product(
    title = 'Vertical 4-Drawer File Cabinet, Metal, Black',
    userId = 8,
    imageUrl='https://res.cloudinary.com/dprnsux1z/image/upload/v1644539070/450092_o01_082120_edz2mq.webp',
    price = 244.9,
    description="Organize your office space with this WorkPro vertical 4-drawer letter-size file cabinet. The 4 letter-size drawers make it simple to file and categorize your documents, and the sleek finish fits easily into a range of spaces. A metal construction offers dependable lasting use. With a built-in lock, this WorkPro vertical 4-drawer letter-size file cabinet helps store and protect your important information.",
    quantity=100,
    categoryId=7
  )
  product22 = Product(
    title = 'Standard-Duty Storage Boxes With Lift-Off Lids',
    userId = 8,
    imageUrl='https://res.cloudinary.com/dprnsux1z/image/upload/v1644539077/Brenton-Studio-Black-Mesh-Step-File_mmg5tv.jpg',
    price = 16.99,
    description="Basic-duty box with lift-off lid that stays attached until ready to use",
    quantity=100,
    categoryId=7
  )
  product23 = Product(
    title = 'Brand Plastic 6-Drawer Storage Cart',
    userId = 8,
    imageUrl='https://res.cloudinary.com/dprnsux1z/image/upload/v1644539672/Office-Depot-Brand-Plastic-6-Drawer_ocozhy.jpg',
    price = 53.69,
    description="Stop losing your supplies. Keep the clutter in your office or crafting room to a minimum with help from an Office Depot storage cart. With its organizer top, this cart helps keep paper, scissors, important memos and more neatly separated and stowed away.",
    quantity=100,
    categoryId=7
  )
  product24 = Product(
    title = 'Recycled, Red/White, Set Of 25 Cards And Envelopes',
    userId = 9,
    imageUrl='https://res.cloudinary.com/dprnsux1z/image/upload/v1644540796/Rite-In-The-Rain-Pocket-Top_ujn6nd.jpg',
    price = 9.9,
    description="Sending thoughtful, personal notes composed on this JAM Paper stationery is a great way to put a smile on the faces of the recipients. Use it to send hand-written thank you notes or invitations to your friends and family.",
    quantity=100,
    categoryId=4
  )
  product25 = Product(
    title = 'Card Set, With Deepest Sympathy',
    userId = 9,
    imageUrl='https://res.cloudinary.com/dprnsux1z/image/upload/v1644540714/912022_p_jam_paper_stationery_set_wz929l.webp',
    price = 44.99,
    description="A loss in anyone's life can be hard, but giving your sympathy can sometimes ease the pain. When people come together and give each other the support they need, times get easier, faster.",
    quantity=100,
    categoryId=4
  )
  product26 = Product(
    title = 'Pocket Top-Spiral Notebook Kit',
    userId = 9,
    imageUrl='https://res.cloudinary.com/dprnsux1z/image/upload/v1644540720/914416_o01_060920_v84uus.webp',
    price = 33.49,
    description="Take notes out in the elements with this all-weather notebook, which comes with a durable zippered case and a pen. This Rite in the Rain paper notebook kit takes up little space in your bag and is easy to carry by hand.",
    quantity=100,
    categoryId=4
  )
  product27 = Product(
    title = 'Thank You Card Set',
    userId = 9,
    imageUrl='https://res.cloudinary.com/dprnsux1z/image/upload/v1644540726/916171_o01_060820_iicpc3.webp',
    price = 38.09,
    description="These cards are a great way for you to show your appreciation for friends and family. Whether you want to thank guests for taking part in your party, or co-workers for their congratulations on your promotion, you can't go wrong sending them all a thoughtful handwritten card!",
    quantity=100,
    categoryId=4
  )
  product28 = Product(
    title = 'ROG Strix G15 G513 G513QR-ES96 15.6" Gaming Notebook',
    userId = 7,
    imageUrl='https://res.cloudinary.com/dprnsux1z/image/upload/v1644541235/4293592_o51_et_7990974_nginhs.jpg',
    price = 1799,
    description="Free upgrade to Windows 11 when available: &nbsp;Upgrade rollout plan is being finalized and is scheduled to begin late 2021 and continue into 2022. Specific time will vary by device. Certain features require specific hardware. See&nbsp;https://www.microsoft.com/en-us/windows/windows-11-specifications.",
    quantity=100,
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
  db.session.add(product19)
  db.session.add(product20)
  db.session.add(product21)
  db.session.add(product22)
  db.session.add(product23)
  db.session.add(product24)
  db.session.add(product25)
  db.session.add(product26)
  db.session.add(product27)
  db.session.add(product28)
  db.session.commit()

def undo_products():
  db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
  db.session.commit()
