class Report < ActiveRecord::Base
  belongs_to :user
  validates :category_type, presence: true
  validates :description, presence: true
  validates :location, presence: true
  validates :date, presence: true
end
