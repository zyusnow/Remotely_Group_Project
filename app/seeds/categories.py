from app.models import db, Category

# Adds categories
def seed_categories():
    category01 = Category(
        name = 'Office Furniture',
        category_image = 'https://res.cloudinary.com/dprnsux1z/image/upload/v1644337202/chalo-garcia-RBoGC_OJvWs-unsplash_kpuzkk.jpg'
    )
    category02 = Category(
        name = 'Computer Technology',
        category_image =  'https://res.cloudinary.com/dprnsux1z/image/upload/v1644295492/tianyi-ma-WiONHd_zYI4-unsplash_oc7ycm.jpg'
    )
    category03 = Category(
        name = 'Computer Accessories',
        category_image = 'https://res.cloudinary.com/dprnsux1z/image/upload/v1644295631/bryan-natanael-c4a_0kycTUE-unsplash_ybcbyb.jpg'
    )
    category04 = Category(
        name = 'Stationery & Office Supplies',
        category_image = 'https://res.cloudinary.com/dprnsux1z/image/upload/v1644336706/marten-bjork-rH8O0FHFpfw-unsplash_s4bbzw.jpg'
    )
    category05 = Category(
        name = 'Boards',
        category_image = 'https://res.cloudinary.com/dprnsux1z/image/upload/v1644337131/jan-antonin-kolar-bXBTjpjgidM-unsplash_vxt4ul.jpg'
    )
    category06 = Category(
        name = 'Office Electronics',
        category_image = 'https://res.cloudinary.com/dprnsux1z/image/upload/v1644336599/joshua-fuller-I0ucRdvImTo-unsplash_rznkn8.jpg'
    )


    db.session.add_all([category01, category02, category03, category04, category05, category06])
    db.session.commit()

def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
