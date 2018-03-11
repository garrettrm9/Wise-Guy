class User < ApplicationRecord
  has_many :jokes
  has_many :routines
  has_many :routine_with_jokes
end
