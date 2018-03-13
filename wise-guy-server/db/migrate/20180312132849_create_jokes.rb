class CreateJokes < ActiveRecord::Migration[5.1]
  def change
    create_table :jokes do |t|
      t.belongs_to :user, index: true
      t.string :name
      t.string :joke_text
      t.string :estimated_length
      t.timestamps
    end
  end
end
