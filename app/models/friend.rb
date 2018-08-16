class Friend < ApplicationRecord
  validates :requesting_id, :requested_id, presence: true
  validates :user_id, uniqueness: { scope: [:question_id] }
  validates :accepted, inclusion: { in: [:true, :false] }
end
