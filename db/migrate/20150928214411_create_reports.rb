class CreateReports < ActiveRecord::Migration
  def change
    create_table :reports do |t|
      t.string :category_type
      t.float :lat
      t.float :lng
      t.belongs_to :suburb
      t.string :description
      t.boolean :happened_before, default: false
      t.string :date
      t.references :user
      t.timestamps null: false
    end
  end
end
