require "rails_helper"

RSpec.describe PictureCategory, type: :model do
  it {should belong_to(:category)}
  it {should belong_to(:picture)}

  it {should_not have_many(:users)}
  it {should_not belong_to(:user)}
end
