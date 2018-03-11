class Routine < ApplicationRecord
  has_many :routine_with_jokes
  has_many :jokes, through: :routine_with_jokes
  belongs_to :user
end
