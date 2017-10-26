class Picture < ApplicationRecord
  belongs_to :user
  has_many :picture_categories
  has_many :categories, through: :picture_category

  validates :name, presence: true
  validates :picture_path, presence: true
end
