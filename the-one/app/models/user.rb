class User < ApplicationRecord
  secure_password?
  has_many :todos
end
