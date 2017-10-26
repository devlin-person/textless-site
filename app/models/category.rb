class Category < ApplicationRecord
  belongs_to :picture_category
  has_many :pictures, through: :picture_category

  validates :name, presence: true
end
