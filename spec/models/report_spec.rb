require 'rails_helper'

RSpec.describe Report, type: :model do

<<<<<<< HEAD
=======
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

  it "is invalid without location" do
    invalid_report = build(:report, location: nil)
    expect(invalid_report).to be_invalid
  end

  it "user can have multiple report" do
    user = User.reflect_on_association(:reports)
    expect(user.macro).to eq(:has_many)
  end

  it "report belongs to user" do
    report = Report.reflect_on_association(:user)
    expect(report.macro).to eq(:belongs_to)
  end

>>>>>>> master
end
