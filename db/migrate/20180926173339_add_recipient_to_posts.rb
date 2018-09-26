class AddRecipientToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :recipient_id, :integer, null: false
    add_index :posts, :recipient_id
  end
end
