class Joke < ApplicationRecord
  has_many :routine_with_jokes
  has_many :routines, through: :routine_with_jokes
  # belongs_to :users
  # validates_uniqueness_of :name
  validates :estimated_length, numericality: true
end