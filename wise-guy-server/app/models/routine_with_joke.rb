class RoutineWithJoke < ApplicationRecord
  belongs_to :joke
  belongs_to :routine
  belongs_to :user
end
