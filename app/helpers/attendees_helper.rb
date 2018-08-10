module AttendeesHelper

	def get_pos(id)
		client = OAuth2::Client.new( ENV["FT_UID"],  ENV["FT_SECRET"], site:"https://api.intra.42.fr")
		token = client.client_credentials.get_token
		info = token.get("/v2/users/" + id + "/locations/").parsed
		# if info.status == 200
			# info.parsed
			location = info[0]["end_at"]
			if location.nil?
				location = info[0]['host']
			else
				location = "Unavailable"
			end
		return location
		# end
	end

	def queenru(login)
		if login == "rliu" || "liuleen" || 'mbouanik'
			return true
		else
			return false
		end
	end
end
