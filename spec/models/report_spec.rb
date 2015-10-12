require 'rails_helper'

RSpec.describe Report, type: :model do
  it "has a valid factory" do
    report = create(:report)
    expect(report).to be_valid
  end

  it "is invalid without category_type" do
    invalid_report = build(:report, category_type: nil)
    expect(invalid_report).to be_invalid
  end

  it "is invalid without description" do
    invalid_report = build(:report, description: nil)
    expect(invalid_report).to be_invalid
  end

  it "is invalid without date" do
    invalid_report = build(:report, date: nil)
    expect(invalid_report).to be_invalid
  end

  it "it has a latitude field" do
    report = build(:report, lat: 12.2345)
    expect(report).to be_valid
  end

  it "user can have multiple report" do
    user = User.reflect_on_association(:reports)
    expect(user.macro).to eq(:has_many)
  end

  it "report belongs to user" do
    report = Report.reflect_on_association(:user)
    expect(report.macro).to eq(:belongs_to)
  end

  it "has valid time row" do
    report = build(:report, time_1: Time.now)
    expect(report.time_1).to be_truthy
  end

  it "has valid datetime one" do
    time = 2.hours.ago
    report = build(:report, time_1: time)
    expect(report.time_1).to eq(time)
  end

  it "has valid datetime two" do
    time = 2.hours.ago
    report = build(:report, time_2: time)
    expect(report.time_2).to eq(time)
  end

  it "has time diff method" do
    time2 = Time.now
    time1 = 2.hours.ago
    report = build(:report, time_1: time1, time_2: time2)
    expect(report.time_diff).to eq(2)
  end
end
