class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.belongs_to :user, index:true
      t.string :title
      t.string :body
      t.timestamps null: false
    end
  end
end