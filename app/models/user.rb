class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  has_many :pictures

  validates :email, presence: true
  validates :admin?, presence: true

  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable
end
