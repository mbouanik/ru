class HomeController < ApplicationController
  def index
      response = RestClient::Request.execute( method: :get,
url: 'https://api.coindesk.com/v1/bpi/currentprice.json'
)
@result = JSON.parse(response)['bpi']['USD']['rate_float']
response = RestClient::Request.execute( method: :get, url: 'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400')
@sun = JSON.parse(response)['results']['sunrise']
# @symbol = JSON.parse(response)['bpi']['USD']['symbol']
  end
end
