# == Schema Information
#
# Table name: posts
#
#  id           :bigint(8)        not null, primary key
#  author_id    :integer          not null
#  recipient_id :integer          not null
#  body         :text             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Post < ApplicationRecord
  validates :author_id, :recipient_id, :body, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
  
  belongs_to :recipient,
    foreign_key: :recipient_id,
    class_name: :User
  
  has_many :comments,
    foreign_key: :post_id,
    class_name: :Comment
  
  has_many_attached :images
end
