class ChangeDataTypeForBody < ActiveRecord::Migration[7.0]
  def change
    change_column :notes, :number, :text
  end
end
