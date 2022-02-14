from app.models import db, Product

def seed_products():
  product01 = Product(
    title='WorkPro® Electric Height-Adjustable Standing Desk with Wireless Charging, 60"W, Black',
    userId=1,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644794034/Remotely/WorkPro%C2%AE%20Electric%20Height-Adjustable%20Standing%20Desk.webp',
    price = 399.99,
    description='Upgrade your office workstation with this 60-inch WorkPro electric sit-stand desk. The aluminum frame provides sturdy support, while the built-in power outlets and charging interfaces keep your devices powered all day long for convenience. This WorkPro electric sit-stand desk is height-adjustable with 4 programmable memory presets to suit different needs, and the paper laminate finish helps protect against chips and scratches.',
    quantity=100,
    categoryId=1,
  )
  product02 = Product(
    title='Keychron K2 Keyboard',
    userId=5,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644253526/Remotely/image_mhtykj.png',
    price = 79.99,
    description = 'Keychron K2 is a 75% layout (84-keys) white backlit compact Bluetooth mechanical keyboard. The ultimate keyboard that retains shortcut and arrow keys.With a unique Mac layout provides all necessary Mac function keys, while compatible with Windows. It connects with up to 3 devices with the reliable and broad compatibility Broadcom Bluetooth chipset proved from time over time.',
    quantity=100,
    categoryId=3,
  )
  product03 = Product(
    title='iPad Pro 12.9"',
    userId=1,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644253487/Remotely/image_yrnqdn.png',
    price = 999.99,
    description = 'iPad Pro features the powerful Apple M1 chip for next-level performance and all-day battery life. An immersive 12.9-inch Liquid Retina XDR display for viewing and editing HDR photos and videos.¹ And a front camera with Center Stage keeps you in frame automatically during video calls. iPad Pro has pro cameras and a LiDAR Scanner for stunning photos, videos, and immersive AR. Thunderbolt for connecting to high-performance accessories. And you can add Apple Pencil for note-taking, drawing, and marking up documents, and the Magic Keyboard for a responsive typing experience and trackpad.',
    quantity=100,
    categoryId=2,
  )
  product04 = Product(
    title='Apple Magic Keyboard -Space Gray',
    userId=3,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644253515/Remotely/image_xqoaoa.png',
    price = 149.99,
    description = 'Magic Keyboard with Numeric Keypad features an extended layout, with document navigation controls for quick scrolling and full-size arrow keys for gaming. A scissor mechanism beneath each key allows for increased stability, while optimized key travel and a low profile provide a comfortable and precise typing experience. The numeric keypad is also great for spreadsheets and finance applications. And the built-in, rechargeable battery is incredibly long-lasting, powering your keyboard for about a month or more between charges.',
    quantity=10,
    categoryId=3,
  )
  product05 = Product(
    title='SteelSeries - Arctis 7+ Wireless 7.1 Surround Sound  Headset',
    userId=1,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644793586/Remotely/SteelSeries%20-%20Arctis%207%2B%20Wireless%207.1%20Surround%20Sound%20Gaming%20Headset%20for%20PS5%7C4%20%2C%20PC%2C%20Mac%2C%20Switch%2C%20and%20Android%20-%20Black.jpg',
    price = 99.99,
    description = 'The SteelSeries Arctis 7+ Wireless headset is designed specifically for multi-system compatibility (PC, PlayStation, Mac, Android, and Switch) with 7.1 Surround Sound on PC. It has a 30-hour battery life, ClearCast mic, easy on-ear headset controls like ChatMix, a durable lightweight steel frame, and lossless ultra-low latency 2.4GHz wireless.',
    quantity = 100,
    categoryId=3,
  )
  product06 = Product(
    title = 'LG - PuriCare Mini Air Purifier - Black',
    userId = 1,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644793094/Remotely/LG%20-%20PuriCare%20Mini%20Air%20Purifier%20-%20Black.jpg',
    price = 199.99,
    description='Pure air wherever you go. The micro particle sensor inside the LG PuriCare™ 360° Air Purifier detects contaminants as small as one microns or smaller in diameter (≤ PM1), for more effective filtration. Enhance home comfort by efficiently eliminating these microscopic pollutants for improved air quality.',
    quantity=100,
    categoryId=8,
  )
  product07 = Product(
    title = 'kathy ireland® Home by Bush Furniture Madison Avenue 60"W L-Shaped Desk With Hutch, Modern Gray',
    userId = 2,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644796392/Remotely/kathy%20ireland%C2%AE%20Home%20by%20Bush%20Furniture%20Madison%20Avenue%2060%22W%20L-Shaped%20Desk%20With%20Hutch%2C%20Modern%20Gray.webp',
    price = 715.99,
    description='The stylish and progressive Madison Avenue 60"W L-Shaped Desk with Hutch presents an ideal workspace solution for the modern home office. Get to work on this spacious corner desk with storage and enjoy an appealing geometric design that comes in your choice of attractive finishes.',
    quantity=10,
    categoryId=1
  )
  product08 = Product(
    title = 'Flash Furniture - High Back LeatherSoft Executive Swivel Office Chair',
    userId = 1,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644793210/Remotely/Flash%20Furniture%20-%20High%20Back%20LeatherSoft%20Executive%20Swivel%20Office%20Chair%20with%20Flared%20Arms%20-%20Black.jpg',
    price = 294.99,
    description='Select this value priced leather chair by flash furniture for an incredible value. This chair will provide the needed comfort for completing work related tasks or leisurely browsing the internet. The chair features attractive upholstery gathering on the seat and back cushions. Personalize this chair with custom text or a logo to show off your individual style or company design.',
    quantity=10,
    categoryId=1
  )
  product09 = Product(
    title = 'Steelcase - Gesture Shell Back Office Chair - Onyx',
    userId = 1,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644796932/Remotely/Steelcase%20-%20Gesture%20Shell%20Back%20Office%20Chair%20-%20Onyx.jpg',
    price = 1263.99,
    description="Perfect for the endurance sitter and technology power user, Gesture adapts to your every move, and every device you use, to provide ultimate, long-lasting comfort and support for your body. With the most inclusive fit of any chair in our portfolio, everyone feels comfortable sitting in Gesture. Our proprietary seat cushion design leverages built in air pockets that conform to your body and reduce pressure that comes from long term sitting. Arrives fully assembled and is backed by a 12-year warranty.",
    quantity=10,
    categoryId=1
  )
  product10 = Product(
    title = 'Moleskine Lined Notebook XL',
    userId = 4,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644421939/Remotely/image_b0u3dt.jpg',
    price=24.99,
    description='Moleskine classic notebooks are perfect notebooks for writing journals, a daily diary, or note taking in college classes or meetings. Moleskine notebooks are beloved by travelers & bullet journalists for their slim design..',
    quantity=10,
    categoryId=4
  )
  product11 = Product(
    title='Lorell® Magnetic Dry-Erase Whiteboard Easel, 36" x 48", Aluminum Frame With Silver Finish',
    userId=1,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644794163/Remotely/Lorell%C2%AE%20Magnetic%20Dry-Erase%2036%22%20x%2048%22.webp',
    price=149.99,
    description='This whiteboard easel features a double-sided design that revolves to provide a fresh board when needed. Its magnetic surface allows you to simply attach notes or magnetic accessories to keep them within quick reach.',
    quantity=10,
    categoryId=5
  )
  product12 = Product(
    title= 'Quartet® DuraMax® Magnetic Dry-Erase Whiteboard, 96" x 48", Aluminum Frame With Silver Finish',
    userId=9,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644794346/Remotely/Quartet%C2%AE%20DuraMax%C2%AE%20Magnetic%20Dry-Erase%20Whiteboard%2C%2096.webp',
    price=299.99,
    description='Brainstorm and collaborate with this Quartet DuraMax porcelain magnetic whiteboard. The ultra-smooth, durable surface does not stain or ghost, while the magnetic board lets you display memos and announcements. Get a clean, modern look and lasting durability from the aluminum frame. This heavy-duty Quartet DuraMax porcelain magnetic dry-erase whiteboard has a full-length tray to hold markers and is designed for daily use in busy classrooms and offices.',
    quantity=10,
    categoryId=5
  )
  product13 = Product(
    title = 'Sharpie S-Note - 24 pack',
    userId = 2,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644794417/Remotely/Sharpie%C2%AE%20S-Note%20Highlighters.webp',
    price = 9.99,
    description='Ignite your imagination with Sharpie S-Note creative markers. Versatile and fun, both a marker and highlighter, adding color to note-taking, underlining, highlighting, drawing and more. The versatile chisel tip lets you quickly switch between precise and broad lines, while no-bleed ink keeps your work looking clean.',
    quantity=10,
    categoryId=4
  )
  product14 = Product(
    title = 'Epson Workforce Pro WF-4830 Wireless Color Inkjet All-In-One Printer',
    userId = 3,
    imageUrl='https://res.cloudinary.com/dikzc7kwd/image/upload/v1644539115/epson-printer_xnaayk.webp',
    price = 219.99,
    description='Print professional-quality photos and documents from almost anywhere with the Epson WorkForce Pro WF-4830 Wireless Inkjet All-in-One Color Printer. App-based and e-mail printing allow you to print from your computer, tablet or smartphone, and with speeds of 25 pages per minute in black, you can have your documents quickly. Plus the DURABrite Ultra ink dries quickly, so you can enjoy printouts with minimal smudging.',
    quantity=10,
    categoryId=6
  )
  product15 = Product(
    title = 'Realspace 36"W Steel 5-Shelf Cabinet, Black',
    userId = 7,
    imageUrl='https://res.cloudinary.com/dikzc7kwd/image/upload/v1644539165/office-cupboard_hmi54u.webp',
    price = 359.99,
    description='Keep office supplies and other items organized with this 72"H x 36"W Realspace steel storage cabinet. A fixed shelf provides room for your tools and supplies, while the 4 adjustable shelves let you customize your storage options. A metal construction with a sleek finish offers durability and adds a professional look to your space. This Realspace steel storage cabinet features a magnetic door latch for easy access.',
    quantity=10,
    categoryId=7
  )
  product16 = Product(
    title = 'LG 34” UltraWide Full HD HDR Monitor with FreeSync',
    userId = 3,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644794713/Remotely/LG%2034%E2%80%9D%20UltraWide%20Full%20HD%20HDR%20Monitor%20with%20FreeSync.jpg',
    price = 329.99,
    description='UltraWide monitors immerse you in everything from content creation to gaming. See a panoramic view made possible by the extra wide 21:9 IPS display for true color accuracy at wide angles. Experience easier multitasking, quickly switch between applications and enjoy a full, unencumbered view.',
    quantity=10,
    categoryId=2
  )
  product17 = Product(
    title = 'HP - 14" 2-In-1 Touchscreen Chromebook',
    userId = 2,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644797706/Remotely/6455914_sd_nn52rt.jpg',
    price = 289.99,
    description='Powered up: The Chromebook x360 is powered by an Intel® processor and packed full of the features you have to have, like a long battery life, and a full-size keyboard. An entertainment experience that adapts to you: With the versatility of a 360° hinge, the beauty of a micro-edge, HD touch display and Audio by B&O, your entertainment experience looks as good as it sounds. Apps for everything: Redefine how you work and play with the seamless integration of your favorite Chrome browser, always secure and up to date, and access to a huge selection of apps in the Google Play Store',
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
    title = 'Safco® Steel Triple-Tray Letter-Size Wall Pocket',
    userId = 8,
    imageUrl='https://res.cloudinary.com/bigtechnik/image/upload/v1644797792/Remotely/912462_wpit88.webp',
    price = 14.99,
    description="Contemporary design complements your workspace's décor. Steel construction features a durable, mar-resistant, powder-coat finish. Accommodates letter-size documents and offers 3 compartments for organization. Includes wall-mounting hardware.",
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

  db.session.add_all([product01, product02, product03, product04, product05, product06, product07, product08, product09, product10, product11, product12, product13, product14, product15, product16, product17, product18, product19, product20, product21, product22, product23, product24, product25, product26, product27, product28, product29, product30, product31, product32, product33, product34, product35, product36, product37, product38, product39, product40])
  db.session.commit()

def undo_products():
  db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
  db.session.commit()
