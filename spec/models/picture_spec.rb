require "rails_helper"

RSpec.describe Picture, type: :model do
  it {should have_valid(:name).when("Kitten")}
  it {should_not have_valid(:name).when(nil, "")}

  it {should have_valid(:picture_path).when("www.picture.com/image")}
  it {should_not have_valid(:picture_path).when(nil, "")}

  it {should belong_to(:user)}

  it {should have_many(:categories).through(:picture_categories)}
  it {should_not have_many(:users)}
end
