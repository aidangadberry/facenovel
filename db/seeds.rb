# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = [
  ["demo", "123123", "Kene", "Rieder", "ilovebooks", "M", Date.new(1985, 7, 12)],
  ["jrrt", "123123", "J. R. R.", "Tolkien", "ringl0rd", "M", Date.new(1892, 1, 3)],
  ["rayb", "123123", "Ray", "Bradbury", "451burnit", "M", Date.new(1920, 8, 22)],
  ["charlesd", "123123", "Charles", "Dickens", "chuckyd", "M", Date.new(1812, 2, 7)],
  ["hlee", "123123", "Harper", "Lee", "harperlee", "F", Date.new(1926, 4, 28)],
  ["georgeo", "123123", "George", "Orwell", "bigbrother", "M", Date.new(1903, 6, 25)],
  ["grrm", "123123", "George", "R. R. Martin", "iceNfire", "M", Date.new(1948, 9, 20)],
  ["jkr", "123123", "Joanne", "K. Rowling", "quidditchr0x", "F", Date.new(1965, 7, 31)]
]

users.map! do |email, pw, fn, ln, url, sex, bday|
  User.create(
    email: email, password: pw, fname: fn, lname: ln, 
    user_url: url, sex: sex, birthday: bday
  )
end

users.each do |user|
  user.profile_picture.attach(
    io: File.open(Rails.root.join("app", "assets", "images", "seeds", "#{user.email}_profile.jpg")), 
    filename: "#{user.email}_profile.jpg", content_type: "image/jpg"
  )

  user.cover_photo.attach(
    io: File.open(Rails.root.join("app", "assets", "images", "seeds", "#{user.email}_cover.jpg")), 
    filename: "#{user.email}_cover.jpg", content_type: "image/jpg"
  )
end

posts = [
  [users[4].id, users[4].id, Date.new(2018, 5, 24),
   "Just saw Avengers Inifity War.. that ending was insane 😱"],
  [users[3].id, users[4].id, Date.new(2018, 6, 25),
   "Happy birthday!! ❤️"],
  [users[2].id, users[4].id, Date.new(2018, 6, 25),
   "Happy birthday, bud. Hope it's a good one"],
  [users[0].id, users[4].id, Date.new(2018, 6, 25),
   "Hbd bro"],
  [users[4].id, users[4].id, Date.new(2018, 6, 25),
   "Thanks for all the birthday wishes everyone!"],
  [users[2].id, users[4].id, Date.new(2018, 7, 3),
   "Yo are you gonna be at my BBQ tomorrow? Gonna be a great party 🇺🇸"],
  [users[1].id, users[0].id, Date.new(2018, 8, 12),
   "Hey man, loved the trilogy. What a great read!"],
  [users[4].id, users[1].id, Date.new(2018, 8, 15),
   "You gonna be having a bday party next week?"],
  [users[3].id, users[1].id, Date.new(2018, 8, 22),
   "Happy birthday :)"],
  [users[2].id, users[1].id, Date.new(2018, 8, 22),
   "Hey, happy birthday! We gotta catch up soon"],
  [users[0].id, users[0].id, Date.new(2018, 9, 30), 
   "Can anyone translate some elvish for me?",
   "elvish.jpg"],
  [users[3].id, users[0].id, Date.new(2018, 10, 2),
   "Wanna go to the Warriors game next week? I got 2 tickets"],
  [users[7].id, users[7].id, Date.new(2018, 10, 15),
   "Fantastic Beasts 2 is in theaters soon! You should all go see it ❤️"],
  [users[6].id, users[6].id, Date.new(2018, 11, 10),
   "A working cover of my new book. Hope you guys like it!",
   "fireandblood.jpg"],
]

posts.map! do |a_id, r_id, cta, body, img|
  post = Post.create(
    author_id: a_id, recipient_id: r_id, body: body, created_at: cta
  )

  if img
    post.image.attach(
      io: File.open(Rails.root.join("app", "assets", "images", "seeds", "#{img}")), 
      filename: "#{img}", content_type: "image/jpg"
    )
  end
end

friends = [
  [users[0].id, users[1].id, true],
  [users[2].id, users[0].id, true],
  [users[0].id, users[3].id, true],
  [users[0].id, users[4].id, true],
  [users[0].id, users[5].id, true],
  [users[1].id, users[5].id, true],
  [users[1].id, users[4].id, true],
  [users[1].id, users[3].id, true],
  [users[2].id, users[5].id, true],
  [users[2].id, users[1].id, true],
  [users[2].id, users[4].id, true],
  [users[3].id, users[5].id, true],
  [users[4].id, users[3].id, true],
  [users[6].id, users[0].id, true],
  [users[7].id, users[0].id, true],
  [users[7].id, users[2].id, true],
  [users[6].id, users[7].id, true]
]

friends.map! do |req_id, rec_id, acc|
  Friend.create(
    requesting_id: req_id, requested_id: rec_id, accepted: acc
  )
end