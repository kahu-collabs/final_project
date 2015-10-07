class CreateReports < ActiveRecord::Migration
  def change
    create_table :reports do |t|
      t.belongs_to :category_types, index: true
      t.string :description
      t.boolean :happened_before, default: false
      t.text :additional_info
      t.references :user_id
      t.string :location
      t.timestamps null: false
    end
  end
end
