class CreateRoutineWithJokes < ActiveRecord::Migration[5.1]
  def change
    create_table :routine_with_jokes do |t|

      t.belongs_to :routine, index: true
      t.belongs_to :joke, index: true

      t.timestamps
    end
  end
end
