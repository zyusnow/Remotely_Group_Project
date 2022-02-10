from app.models import db, Category

# Adds categories
def seed_categories():
    category01 = Category(
        name = 'Office Furniture',
        category_image = 'https://cdn11.bigcommerce.com/s-rb8ue6qv0m/images/stencil/1000x1000/products/784/1149/AeronNew-2__42337.1510272893.jpg?c=2'
    )
    category02 = Category(
        name = 'Computer & Tablets',
        category_image =  'https://res.cloudinary.com/dprnsux1z/image/upload/v1644295492/tianyi-ma-WiONHd_zYI4-unsplash_oc7ycm.jpg'
    )
    category03 = Category(
        name = 'Accessories',
        category_image = 'https://res.cloudinary.com/dprnsux1z/image/upload/v1644295631/bryan-natanael-c4a_0kycTUE-unsplash_ybcbyb.jpg'
    )
    category04 = Category(
        name = 'Stationery & Office Supplies',
        category_image = 'https://res.cloudinary.com/dprnsux1z/image/upload/v1644336706/marten-bjork-rH8O0FHFpfw-unsplash_s4bbzw.jpg'
    )
    category05 = Category(
        name = 'Project Planning',
        category_image = 'https://res.cloudinary.com/dprnsux1z/image/upload/v1644337131/jan-antonin-kolar-bXBTjpjgidM-unsplash_vxt4ul.jpg'
    )
    category06 = Category(
        name = 'Office Electronics',
        category_image = 'https://asia.canon/media/image/2021/02/18/7ee598480e9c47bab6eba33c7df37bfb_Professional+Photo+Printers.png'
    )
    category07 = Category(
        name = 'Storage & Organization',
        category_image = 'https://secure.img1-fg.wfcdn.com/im/30835577/resize-h445%5Ecompr-r85/1379/137962373/Stotfold+32%2527%2527+Wide+Server.jpg'
    )
    category08 = Category(
        name = 'Health & Wellness',
        category_image = 'https://ortorex.com/wp-content/uploads/2020/10/Portable-300ml-Humidifier-USB-Ultrasonic-Dazzle-Cup-Aroma-Diffuser-Cool-Mist-Maker-Air-Humidifier-Purifier-with.jpg'
    )


    db.session.add_all([category01, category02, category03, category04, category05, category06, category07, category08])
    db.session.commit()

def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
