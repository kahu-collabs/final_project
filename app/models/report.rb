class Report < ActiveRecord::Base
  acts_as_mappable :default_units => :kms,
                   :default_formula => :sphere,
                   :distance_field_name => :distance,
                   :lat_column_name => :lat,
                   :lng_column_name => :lng
  belongs_to :user
  belongs_to :suburb
  validates :category_type, presence: true
  validates :description, presence: true
  validates :date, presence: true
end
