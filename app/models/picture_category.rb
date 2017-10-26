class PictureCategory < ApplicationRecord
  belongs_to :category
  belongs_to :picture
end
