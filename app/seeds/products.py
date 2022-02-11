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
    price = 100.99,
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
  product19 = Product(
    title = 'Stor/File™ Medium-Duty Storage Boxes',
    userId = 6,
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
    userId = 2,
    imageUrl='https://res.cloudinary.com/dprnsux1z/image/upload/v1644539070/450092_o01_082120_edz2mq.webp',
    price = 244.95,
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
    description="Stop losing your supplies. Keep the clutter in your office or crafting room to a minimum with help from a storage cart. With its organizer top, this cart helps keep paper, scissors, important memos and more neatly separated and stowed away.",
    quantity=100,
    categoryId=7
  )
  product24 = Product(
    title = 'BIC Round Stic Ballpoint Pens, Pack of 60 Black Ink Pens',
    userId = 3,
    imageUrl='https://res.cloudinary.com/dikzc7kwd/image/upload/v1644544886/blackinkpens_nfnhb7.jpg',
    price = 5.99,
    description="Write in comfort and with ease thanks to the lightweight construction of these smooth ballpoint pens. Each BIC ballpoint pen features a medium-point, 1.0-mm tip that delivers lines that are clean and simple to read with every stroke.",
    quantity=10,
    categoryId=4
  )
  product25 = Product(
    title = 'Just Basics Basic View 3-Ring Binder, Black',
    userId = 9,
    imageUrl='https://res.cloudinary.com/dikzc7kwd/image/upload/v1644545141/326156_o01_just_basics_d_ring_view_binder_zue2u3.webp',
    price = 7.39,
    description="3-ring binders and view binders are the standards in document organization. This round-ring binder is excellent for those small tasks and assignments that need a just-right organizer to get the job done. This Just Basics round-ring view binder may be small, but it packs an organizational punch.",
    quantity=100,
    categoryId=4
  )
  product26 = Product(
    title = 'Wirebound Business Notebook',
    userId = 9,
    imageUrl='https://res.cloudinary.com/dikzc7kwd/image/upload/v1644545404/notebook_ogsg1s.webp',
    price = 11.29,
    description="Great for note-taking, writing reminders and more. - 160 pages",
    quantity=100,
    categoryId=4
  )
  product27 = Product(
    title = 'Post it Notes Super Sticky Notes, Pack Of 24 Pads',
    userId = 5,
    imageUrl='https://res.cloudinary.com/dikzc7kwd/image/upload/v1644545253/stickynotes_zpjkuc.webp',
    price = 35.49,
    description="Post-it Super Sticky Notes in 3 in x 3 in feature 2x the sticking power. Use for notes or reminders on doors, windows or walls. Unique adhesive reliably sticks and re sticks so your message can stay front and center. Move your notes with you throughout the day. Cabinet pack size is a great way to stock up your work area, study space, or classroom. Ideas are out of this world with the electric colors of the Supernova Neon collection. Post-it® Super Sticky Notes are recyclable and the paper in Post-it Super Sticky Notes is sourced from certified, renewable and responsibly managed forests.",
    quantity=100,
    categoryId=4
  )
  product28 = Product(
    title = 'ROG Strix G15 G513 G513QR-ES96 15.6" Gaming Notebook',
    userId = 7,
    imageUrl='https://res.cloudinary.com/dprnsux1z/image/upload/v1644541235/4293592_o51_et_7990974_nginhs.jpg',
    price = 1799.99,
    description="Free upgrade to Windows 11 when available: &nbsp;Upgrade rollout plan is being finalized and is scheduled to begin late 2021 and continue into 2022. Specific time will vary by device. Certain features require specific hardware. See&nbsp;https://www.microsoft.com/en-us/windows/windows-11-specifications.",
    quantity=100,
    categoryId=2
  )
  product29 = Product(
    title = 'Ativa 6-Sheet Cross-Cut Shredder, Black',
    userId = 8,
    imageUrl='https://res.cloudinary.com/dikzc7kwd/image/upload/v1644539649/9320829_o01_ativa_6_sheet_cross_cut_shredder_jaghxf.webp',
    price = 39.99,
    description="Destroying sensitive documents can help ensure that your private information stays out of the hands of identity thieves and other criminals. This cross-cut Ativa shredder allows you to quickly dispose of financial statements and other personal documents.",
    quantity=10,
    categoryId=6
  )
  product30 = Product(
    title = 'Brother IntelliFAX-2840 Laser Fax Machine',
    userId = 10,
    imageUrl='https://res.cloudinary.com/dikzc7kwd/image/upload/v1644539757/fax-machine_kpbizg.webp',
    price = 199.99,
    description="The Brother IntelliFAX-2840 provides consistent high-speed laser faxing with a crisp, clear, professional output for when you need to get your documents where they need to be on time and looking good.",
    quantity=10,
    categoryId=6
  )
  product31 = Product(
    title = 'Epson Perfection V600 Photo Scanner',
    userId = 9,
    imageUrl='https://res.cloudinary.com/dikzc7kwd/image/upload/v1644540608/178173_o01_epson_perfection_v600_photo_scanner_h3blnb.webp',
    price = 249.99,
    description="TDelivers outstanding quality scans from photos, film, slides and everyday documents. Scan all your prints, negatives and slides quickly and efficiently.",
    quantity=10,
    categoryId=6
  )
  product32 = Product(
    title = 'Epson Pro 1080p FHD 3LCD Wireless Projector With Miracast',
    userId = 7,
    imageUrl='https://res.cloudinary.com/dikzc7kwd/image/upload/v1644541370/projector_o4gcsk.webp',
    price = 849.99,
    description="Present in rich high-definition with the Epson Pro EX9240 3LCD Projector. The picture is bright and clear, even in well-lit rooms, and it's easy to get in focus thanks to auto and manual adjustment options. From video conferencing to connecting streaming devices, this wireless multimedia projector lets you take your presentation capabilities to the next level.",
    quantity=50,
    categoryId=6
  )
  product33 = Product(
    title = 'Seagate One Touch 2 TB Portable Hard Drive - Black - USB 3.0',
    userId = 6,
    imageUrl='https://res.cloudinary.com/dikzc7kwd/image/upload/v1644540557/hard-drive_sold91.jpg',
    price = 67.99,
    description="Store photos, documents, music and other files. The slim design makes this portable hard drive easy to take with you while working remotely, and automatic backups help ensure your data remains secure.",
    quantity=50,
    categoryId=3
  )
  product34 = Product(
    title = 'Logitech Optical Gaming Mouse, Black',
    userId = 3,
    imageUrl='https://res.cloudinary.com/dikzc7kwd/image/upload/v1644541862/mouse_j7jzqw.webp',
    price = 24.99,
    description="Level up your gaming experience with the Logitech G300S Gaming Mouse. Quickly scan the virtual terrain on the higher sensitivity setting, and lower it down for precision targeting. Your best moves are easy to activate thanks to the programmable controls. With 3 profiles and light settings you can assign to each one, this optical gaming mouse delivers personalized performance for the user.",
    quantity=50,
    categoryId=3
  )
  product35 = Product(
    title = 'Blue Yeti USB Microphone - Silver',
    userId = 4,
    imageUrl='https://res.cloudinary.com/dikzc7kwd/image/upload/v1644541986/microphone_fhkozl.webp',
    price = 134.09,
    description="Perfect for vocals, musical instruments, podcasting, voiceovers, interviews, field recordings, conference calls",
    quantity=20,
    categoryId=3
  )
  product36 = Product(
    title = 'Sauder Summit Station 66"W Executive Desk, Laurel Oak',
    userId = 7,
    imageUrl='https://res.cloudinary.com/dikzc7kwd/image/upload/v1644543269/7147472_o01_sauder_summit_station_66w_executive_desks_fk5pyg.webp',
    price = 319.99,
    description="Impress your clients and office guests with this Sauder Summit Station executive desk. The 7 drawers let you stash away assorted items and folders, while a flip-down front keeps your keyboard nearly tucked away when not in use. This Sauder Summit Station executive desk has a cable management grommet to help maintain a neat workspace, and the tapered feet provide stability.",
    quantity=20,
    categoryId=1
  )
  product37 = Product(
    title = 'Herman Miller Aeron chair',
    userId = 9,
    imageUrl='https://res.cloudinary.com/dikzc7kwd/image/upload/v1644543396/W-PD_2195348_graphite_graphite_all_f-jpg_h9twsl.jpg',
    price = 1695.99,
    description="Aeron office chair revolutionized office seating with its defining design qualities: the pioneering Pellicle suspension material and its patented PostureFit SL back support, which affords the ideal sit — chest open, shoulders back, pelvis tilted slightly forward.",
    quantity=20,
    categoryId=1
  )
  product38 = Product(
    title = 'Bostitch InPower™ Premium Spring-Powered Desktop Stapler, Black/Silver',
    userId = 10,
    imageUrl='https://res.cloudinary.com/dikzc7kwd/image/upload/v1644544169/stapler_npsija.jpg',
    price = 24.89,
    description="Staple to 28 sheets of paper with this black Bostitch InPower spring-powered desktop stapler. The integrated StapleStore compartment keeps extra staples close at hand for a quick refill, while the built-in staple remover lets you detach unneeded pages or correct mistakes. This Bostitch InPower spring-powered desktop stapler features No-Jam technology for efficient stapling performance and the soft, rubberized grip makes it comfortable to hold and use.",
    quantity=100,
    categoryId=4
  )
  product39 = Product(
    title = 'Fitbit Sense',
    userId = 9,
    imageUrl='https://res.cloudinary.com/dikzc7kwd/image/upload/v1644544337/sense-sage-gray-device-3qt_n3g3nc.png',
    price = 199.95,
    description="Meet Fitbit Sense, our most advanced health smartwatch. Make smarter choices for your well-being with innovative sensors that track Health Metrics, sleep & activity and help manage stress. Plus access 6-month Fitbit Premium membership† and Daily Readiness Score.",
    quantity=10,
    categoryId=8
  )
  product40 = Product(
    title = 'Envelopes, Clean Seal, White',
    userId = 4,
    imageUrl='https://res.cloudinary.com/dikzc7kwd/image/upload/v1644545561/envelopes_fzmy1v.webp',
    price = 51.09,
    description="Don't let the thought of licking envelope adhesive ruin your day. These envelopes offer a convenient peel-and-seal design that requires no moisture. Includes Clean Seal security envelopes in a box of 500.",
    quantity=100,
    categoryId=4
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
  db.session.add(product29)
  db.session.add(product30)
  db.session.add(product31)
  db.session.add(product32)
  db.session.add(product33)
  db.session.add(product34)
  db.session.add(product35)
  db.session.add(product36)
  db.session.add(product37)
  db.session.add(product38)
  db.session.add(product39)
  db.session.add(product40)

  db.session.commit()

def undo_products():
  db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
  db.session.commit()
