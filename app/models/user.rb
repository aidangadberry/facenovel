# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  fname           :string
#  lname           :string
#  user_url        :string           not null
#  birthday        :date
#  sex             :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, :session_token, :user_url, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token, :ensure_user_url
  before_create :attach_default_photos

  attr_reader :password

  has_many :authored_posts,
    foreign_key: :author_id,
    class_name: :Post

  has_one_attached :profile_picture
  has_one_attached :cover_photo

  def friends
    Friend.where("requesting_id = ? AND accepted = ?", self.id, true).or(
      Friend.where("requested_id = ? AND accepted = ?", self.id, true)
    ).map do |request| 
      if request.requesting_user.id == self.id
        request.requested_user.id
      else
        request.requesting_user.id
      end
    end
  end
  
  def wall_posts
    Post.where("recipient_id = ?", self.id)
      .order(created_at: :desc)
  end

  def feed_posts
    friend_ids = friends
    
    Post.where("author_id IN (?) AND recipient_id IN (?)", friend_ids, friend_ids)
  end

  def attach_default_photos
    self.profile_picture.attach(
      io: File.open(Rails.root.join('app', 'assets', 'images', 'profile.png')), 
      filename: 'profile.png', content_type: 'image/png'
    )

    self.cover_photo.attach(
      io: File.open(Rails.root.join('app', 'assets', 'images', 'cover.jpg')), 
      filename: 'cover.jpg', content_type: 'image/png'
    )
  end
    
  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def reset_session_token!
    self.session_token = User.generate_session_token;
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def ensure_user_url
    self.user_url ||= User.generate_session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end
end
