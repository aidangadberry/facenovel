class Friend < ApplicationRecord
  validates :requesting_id, :requested_id, presence: true
  validates :requesting_id, uniqueness: { scope: [:requested_id] }
  validates :requested_id, uniqueness: { scope: [:requesting_id] }
  validates :accepted, inclusion: { in: [true, false] }

  def self.friendship(friend_params)
    requester = friend_params.fetch(:requesting_id).to_i
    requested = friend_params.fetch(:requested_id).to_i

    friendship1 = Friend.where(requesting_id: requester, requested_id: requested)
    friendship2 = Friend.where(requesting_id: requested, requested_id: requester)

    return friendship1 if friendship1.length === 1
    return friendship2 if friendship2.length === 1
    return nil
  end
end
