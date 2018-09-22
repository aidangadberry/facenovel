# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.find_by(email: "demo@demo.com").delete if (User.find_by(email: "demo@demo.com"))
User.create(
  email: "demo@demo.com",
  password: "123123",
  fname: "Demo",
  lname: "Demothy",
  user_url: "DemoUser",
  birthday: Date.new(1985, 7, 12)
)
