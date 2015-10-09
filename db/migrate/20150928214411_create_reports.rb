class CreateReports < ActiveRecord::Migration
  def change
    create_table :reports do |t|
      t.string :category_type
      t.string :description
      t.boolean :happened_before, default: false
      t.string :date
      t.references :user
      t.string :location
      t.timestamps null: false
    end
  end
end
