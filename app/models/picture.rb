class Picture < ApplicationRecord
  belongs_to :user
  has_many :picture_categories
  has_many :categories, through: :picture_categories

  validates :name, presence: true
  validates :picture_path, presence: true
  validates :user_id, presence: true
end
