User.destroy_all

User.create(
  email: 'demo@demo.com',
  password: '123123',
  fname: 'Demo',
  lname: 'Demothy',
  user_url: 'DemoUser',
  birthday: Date.new(1985, 7, 12)
)
User.create(
  email: 'sjosefovic0@yahoo.com',
  password: '123123',
  fname: 'Sarah',
  lname: 'Josefovic',
  user_url: 'sjosefovic',
  birthday: Date.new(1998, 5, 16),
  sex: 'F'
)
User.create(
  email: 'billston1@pacbell.net',
  password: '123123',
  fname: 'Blayne',
  lname: 'Illston',
  user_url: 'billston',
  birthday: Date.new(1992, 7, 22),
  sex: 'M'
)
User.create(
  email: 'agadberr@gmail.com',
  password: '123123',
  fname: 'Aidan',
  lname: 'Gadberry',
  user_url: 'aidangadberry',
  birthday: Date.new(1995, 10, 26),
  sex: 'M'
)
User.create(
  email: 'laurenj@gmail.com',
  password: '123123',
  fname: 'Lauren',
  lname: 'Johnson',
  user_url: 'laurenj',
  birthday: Date.new(1994, 3, 8),
  sex: 'F'
)

Friend.destroy_all
Friend.create(requesting_id: User.third.id, requested_id: User.first.id, accepted: false)
Friend.create(requesting_id: User.third.id, requested_id: User.fifth.id, accepted: true)
Friend.create(requesting_id: User.first.id, requested_id: User.fourth.id, accepted: true)
Friend.create(requesting_id: User.third.id, requested_id: User.fourth.id, accepted: false)
