class RemoveAttrFromModel < ActiveRecord::Migration[7.0]
  def change
    remove_column :notes, :number
  end
end
