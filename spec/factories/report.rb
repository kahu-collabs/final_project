FactoryGirl.define do
  factory :report do
    category_type {rand(1..4)}
    description Faker::Lorem.sentence
    happened_before false
    date Faker::Date.between(2.days.ago, Date.today)
    lat Faker::Number.decimal(l_digits =2, r_digits = 4)
  end
end
