json.attendees do
	json.array!(@attendees) do |attendee|
		json.login attendee.login
		json.url attendee_path(attendee)
	end
end

json.attendees_name do
	json.array!(@attendees_name) do |attendee_name|
		json.login attendee_name.name
		json.url attendee_path(attendee_name)
	end
end
