from app.models import db, Category

# Adds categories
def seed_categories():
    category01 = Category(
        name = 'Office Furniture',
        category_image = 'https://cdn11.bigcommerce.com/s-rb8ue6qv0m/images/stencil/1000x1000/products/784/1149/AeronNew-2__42337.1510272893.jpg?c=2'
    )
    category02 = Category(
        name = 'Computer & Tablets',
        category_image =  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Huawei_Matebook_2-in-1_tablet_with_Windows_10_%2826627141971%29.jpg/290px-Huawei_Matebook_2-in-1_tablet_with_Windows_10_%2826627141971%29.jpg'
    )
    category03 = Category(
        name = 'Accessories',
        category_image = 'https://res.cloudinary.com/dprnsux1z/image/upload/v1644295631/bryan-natanael-c4a_0kycTUE-unsplash_ybcbyb.jpg'
    )
    category04 = Category(
        name = 'Stationery & Office Supplies',
        category_image = 'https://www.mbe.co.uk/uploads/businesshub/MBE-Office-Supplies-Web-V1.jpg'
    )
    category05 = Category(
        name = 'Project Planning',
        category_image = 'https://www.ikea.com/us/en/images/products/elloven-whiteboard-noticeboard-with-casters-white__1021220_pe832069_s5.jpg?f=s'
    )
    category06 = Category(
        name = 'Office Electronics',
        category_image = 'https://res.cloudinary.com/dikzc7kwd/image/upload/v1644545836/printer-category_wtvc1z.png'
    )
    category07 = Category(
        name = 'Storage & Organization',
        category_image = 'https://res.cloudinary.com/dikzc7kwd/image/upload/v1644545918/Eggert_17.72_27_27_Wide_4_-Drawer_Mobile_Vertical_Filing_Cabinet_diw6bc.jpg'
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
