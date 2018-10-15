class Comment < ApplicationRecord
  validates :author_id, :post_id, :body, presence: true
end
