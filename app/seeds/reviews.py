from app.models import db, Review

# Adds demo reviews
def seed_reviews():
  review1 = Review(
    productId=1,
    userId=2,
    rating=4,
    comment='This is a great product! I love being able to adjust the height of the desk to fit my needs!',
  )
  review2 = Review (
    productId = 1,
    userId = 3,
    rating = 5,
    comment = 'I love this desk! I can fit a lot of stuff on it!'
  )
  review3 = Review (
    productId = 2,
    userId = 2,
    rating = 4,
    comment = 'I love the feedback from this keyboard, the sound it makes is so satisfying!'
  )
  review4 = Review (
    productId = 2,
    userId = 3,
    rating = 5,
    comment = 'I love this keyboard! I can type really fast and I can hear the keys being pressed!'
  )
  review5 = Review (
    productId = 3,
    userId = 2,
    rating = 4,
    comment = 'I love the screen resolution on this iPad! Absolutely stunning. Makes it a lot easier for me to get simple work tasks done while out and about or spending time with family and friends!'
  )
  review6 = Review (
    productId = 3,
    userId = 3,
    rating = 5,
    comment = 'Apple has done it again with this amazing device. 5 stars hands down!'
  )
  review7 = Review (
    productId = 4,
    userId = 2,
    rating = 5,
    comment = 'I love the ease of use with this keyboard, it simply works!'
  )
  review8 = Review (
    productId = 4,
    userId = 3,
    rating = 5,
    comment = 'This keyboard is truly magic! The battery lasts FOREVER.'
  )
  review9 = Review (
    productId = 5,
    userId = 2,
    rating = 4,
    comment = 'I really like that these headphones provide noise cancellation so I can focus on my work!'
  )
  review10 = Review (
    productId = 5,
    userId = 3,
    rating = 5,
    comment = 'I love this headset! I can hear my music and my voice clearly!'
  )
  review11 = Review (
    productId = 6,
    userId = 2,
    rating = 4,
    comment = 'I was a little apprehensive about getting this air purifier thinking it was just a gimmick, but I was wrong! It is a great product!'
  )
  review12 = Review (
    productId = 6,
    userId = 3,
    rating = 3,
    comment = 'I think this is a decent air purifier. It does put out a low humming noise that I am not sure I like, but it is a decent product.'
  )

  db.session.add_all([review1, review2, review3, review4, review5, review6, review7, review8, review9, review10, review11, review12])
  db.session.commit()


def undo_reviews():
  db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
  db.session.commit()
