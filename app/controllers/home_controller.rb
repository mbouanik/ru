class HomeController < ApplicationController
  def index
#       response = RestClient::Request.execute( method: :get,
# url: 'https://api.coindesk.com/v1/bpi/currentprice.json'
# )
# @result = JSON.parse(response)['bpi']['USD']['rate_float']
# if params[:home].present?
#     response = RestClient::Request.execute( method: :get, url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+ params[:home][:user] +'&sensor=false')
#     @localisation = JSON.parse(response)
#     response = RestClient::Request.execute( method: :get, url: 'https://api.sunrise-sunset.org/json?lat=' + localisation['results']['geometry']['location']['lat'].to_s + ' &lng=' + localisation['results']['geometry']['location']['lng'].to_s)
#     @sun = JSON.parse(response)['results']['sunrise']
#   end
# end

    # @reponse = RestClient::Request.execute( method: :get,
    #   url: 'https://api.intra.42.fr/v2/accreditations/:id'
    # )
    # @image = JSON.parse(response)
  end
end
