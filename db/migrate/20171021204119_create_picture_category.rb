class CreatePictureCategory < ActiveRecord::Migration[5.1]
  def change
    create_table :picture_categories do |t|
      t.belongs_to :category, null: false
      t.belongs_to :picture, null: false

      t.timestamps
    end
  end
end
