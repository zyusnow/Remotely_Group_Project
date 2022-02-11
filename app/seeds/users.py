from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')
    niharika = User(
        username='niharika', email='niharika@aa.io', password='password')
    nicolas = User(
        username='nicolas', email='nicolas@aa.io', password='password')
    juilia = User(
        username='julia', email='julia@aa.io', password='password')
    carmen = User(
        username='carmen', email='carmen@aa.io', password='password')
    richard = User(
        username='richard', email='richard@aa.io', password='password')
    jose = User(
        username='jose', email='jose@aa.io', password='password')
    anthony = User(
        username='anthony', email='anthony@aa.io', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(niharika)
    db.session.add(nicolas)
    db.session.add(juilia)
    db.session.add(carmen)
    db.session.add(richard)
    db.session.add(jose)
    db.session.add(anthony)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
