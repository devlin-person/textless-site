class CreatePicture < ActiveRecord::Migration[5.1]
  def change
    create_table :pictures do |t|
      t.string :name, null: false
      t.string :picture_path, null: false
      t.belongs_to :user, null: false

      t.timestamps
    end
  end
end
