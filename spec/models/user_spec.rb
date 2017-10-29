require "rails_helper"

RSpec.describe User, type: :model do
  it {should have_valid(:email).when("user@user.com")}
  it {should_not have_valid(:email).when("", nil)}

  it {should have_many(:pictures)}
  it {should_not have_many(:categories)}
end
