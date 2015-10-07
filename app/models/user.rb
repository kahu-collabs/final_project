class User < ActiveRecord::Base
  has_many :reports

  def self.find_or_create_from_omniauth(auth)
    user = User.where({:uid => auth[:uid], :provider => auth[:provider]}).first_or_create

    info = auth['extra']['raw_info']

    user.provider = auth.provider
    user.uid = auth.uid
    user.name = info.name
    user.save if user.changed?
    user
  end

end
