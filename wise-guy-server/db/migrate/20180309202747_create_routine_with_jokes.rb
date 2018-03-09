class CreateRoutineWithJokes < ActiveRecord::Migration[5.1]
  def change
    create_table :routine_with_jokes do |t|

      t.timestamps
    end
  end
end
