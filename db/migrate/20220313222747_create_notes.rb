class CreateNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :notes do |t|
      t.integer :number
      t.string :title
      t.string :body

      t.timestamps
    end
  end
end
