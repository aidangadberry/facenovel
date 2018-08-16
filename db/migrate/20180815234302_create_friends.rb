class CreateFriends < ActiveRecord::Migration[5.1]
  def change
    create_table :friends do |t|
      t.integer :requesting_id, null: false
      t.integer :requested_id, null: false
      t.boolean :accepted, null: true, default: false
      t.timestamps
    end

    add_index :friends, [:requesting_id, :requested_id], unique: true
  end
end
