class CreateJokes < ActiveRecord::Migration[5.1]
  def change
    create_table :jokes do |t|
      t.string :name
      t.string :jokeText
      t.belongs_to :user, index:true
      t.timestamps
    end
  end
end
