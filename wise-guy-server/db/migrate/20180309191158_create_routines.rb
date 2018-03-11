class CreateRoutines < ActiveRecord::Migration[5.1]
  def change
    create_table :routines do |t|
      t.string :name
      t.time :estimatedLength
      t.belongs_to :user, index:true
      t.timestamps
    end
  end
end
