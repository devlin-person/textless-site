require 'rails_helper'

RSpec.describe Category, type: :model do
  it {should have_valid(:name).when("Cat")}
  it {should_not have_valid(:name).when(nil, "")}

  it {should have_many(:pictures).through(:picture_category)}
  it {should_not have_many(:users)}

  it {should belong_to(:picture_category)}
  it {should_not belong_to(:user)}
end
