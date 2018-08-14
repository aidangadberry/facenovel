class AddConstraintsToUserUrl < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :user_url, :string, null: false
    add_index :users, :user_url, unique: true
  end
end
