class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.belongs_to :suburb, index:true
      t.string :provider
      t.string :uid
      t.string :name
      t.string :email

      t.timestamps null: false
    end
  end
end
