class CreateCategory < ActiveRecord::Migration[5.1]
  def change
    create_table :categories do |t|
      t.string :name, null: false
      t.belongs_to :picture_category

      t.timestamps
    end
  end
end
