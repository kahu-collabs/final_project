FactoryGirl.define do
  factory :report do
    category_type {rand(1..4)}
    description Faker::Lorem.sentence
    happened_before false
    date Faker::Date.between(2.days.ago, Date.today)
    location Faker::Lorem.word
  end
end
