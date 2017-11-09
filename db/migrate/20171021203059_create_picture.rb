class CreatePicture < ActiveRecord::Migration[5.1]
  def change
    create_table :pictures do |t|
      t.string :name, null: false
      # t.belongs_to :user

      t.timestamps
    end
  end
end
