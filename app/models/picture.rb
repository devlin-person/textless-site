class Picture < ApplicationRecord
  belongs_to :user, optional: true
  has_many :picture_categories
  has_many :categories, through: :picture_categories

  validates :name, presence: true

end
