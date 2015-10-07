class CreateReports < ActiveRecord::Migration
  def change
    create_table :reports do |t|
      t.integer :category_types_id
      t.string :description
      t.boolean :happened_before, default: false
      t.text :additional_info
      t.references :user_id
      t.string :location
      t.timestamps null: false
    end
  end
end
