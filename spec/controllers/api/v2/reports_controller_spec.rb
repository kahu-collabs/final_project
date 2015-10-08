require 'rails_helper'

RSpec.describe Api::V2::ReportsController, type: :controller do
    let(:mock_current_user){
    user = User.new
    user.id = 1
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return (user)
    user
  }

  describe "GET all reports" do
    let!(:mock_all){
      allow(Report).to receive(:all) {[{text:"meow"}]}
    }

    it "returns 200" do
      get :index
      expect(response.status).to eq(200)
    end

    it "returns reports as JSON" do
      get :index
      results = JSON.parse(response.body)
      expect(results.first["text"]).to eq("meow")
    end
  end

  describe "GET individual report" do

    let!(:mock_find){
      allow(Report).to receive(:find) {{text:"meow"}}
    }

    it "returns 200" do
      get :show, :id => 1
      expect(response.status).to eq(200)
    end

    it "returns report as JSON" do
      get :show, :id => 1
      results = JSON.parse(response.body)
      expect(results["text"]).to eq("meow")
    end
  end

  describe "CREATE a report" do
    let(:mock_saved_report){
      double("Report", persisted?: true)
    }
    let(:mock_invalid_report){
      double("Report", persisted?: false)
    }
    let(:post_report){
      post :create, {category_type: "Type",
                             description: "Description",
                             date: "Date",
                             location: "Location"}
    }

    describe "user is logged in" do
      before do
        mock_current_user
      end

      it "returns 200 with valid params" do
        allow(Report).to receive(:create) {mock_saved_report}
        post_report
        expect(response.status).to eq(200)
      end

      it "returns 400 with incorrect params" do
        allow(Report).to receive(:create) {mock_invalid_report}
        post_report
        expect(response.status).to eq(400)
      end
    end
  end

  describe "DELETE a report" do
    let(:mock_report){
      double("Report", destroy: nil)
    }

    describe "user is logged in" do
      before do
        mock_current_user
      end

      it "returns 200 with valid params" do
        allow(Report).to receive(:find_by) {mock_report}
        delete :destroy, id: 1
        expect(response.status).to eq(200)
      end

      it "calls destroy with valid params" do
        allow(Report).to receive(:find_by) {mock_report}
        expect(mock_report).to receive(:destroy)
        delete :destroy, id: 1
      end

      it "returns 400 with incorrect params" do
        allow(Report).to receive(:find_by) {nil}
        delete :destroy, id: -1
        expect(response.status).to eq(400)
      end
    end
  end
end
