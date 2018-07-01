class RoutineWithJoke < ApplicationRecord
  belongs_to :joke
  belongs_to :routine
  validates_uniqueness_of :joke_id, scope: [:routine_id]
end
