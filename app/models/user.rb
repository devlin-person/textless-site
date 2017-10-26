class User < ApplicaitonRecord
  has_many :pictures

  validates: :email, presence: true
  validates: :admin?, presence: true
end
