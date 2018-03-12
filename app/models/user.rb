class User < ApplicationRecord
  has_many :routines
  has_many :jokes
end
