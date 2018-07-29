json.attendes do
	json.array!(@attendees) do |attendee|
		json.login attendee.login
		json.url attendee_path(attendee)
	end
end
