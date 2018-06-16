# require "oauth2"
# require "json"
# UID="50b91441f58131657de6d144fc94b37c73ddde63f19ab3ccaa163ef563cd1559"
# SECRET="20980f768aababbadfa8f851b990ec9ee70c5fac0f48fc02598264d9a5f247ef"
#
# client = OAuth2::Client.new(UID, SECRET, site:"https://api.intra.42.fr")
# token = client.client_credentials.get_token
#
# user_quest = token.get("/v2/users/" + login).parsed
require 'json'

  def get_pos(id)
    uid = "50b91441f58131657de6d144fc94b37c73ddde63f19ab3ccaa163ef563cd1559"
    secret = "20980f768aababbadfa8f851b990ec9ee70c5fac0f48fc02598264d9a5f247ef"
    client = OAuth2::Client.new(uid, secret, site:"https://api.intra.42.fr")
    token = client.client_credentials.get_token

    #location = token.get("/v2/users" + id).parsed
    #location["location"]
    info = token.get("/v2/users/" + id + "/locations/").parsed
    # puts info
    puts "===="
    location = info[0]["begin_at"]
    puts location
    if location.nil?
      location = info[1]
    else
      location = "Unavailable"
    end

    return location
  end
