class ChangeReportUserAssociation < ActiveRecord::Migration
  def change
    change_table :reports do |t|
      t.remove :user_id_id
      t.belongs_to :user, index: true
    end
  end
end
