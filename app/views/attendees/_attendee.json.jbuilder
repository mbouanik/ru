json.extract! attendee, :id, :name, :login, :user_id, :created_at, :updated_at
json.url attendee_url(attendee, format: :json)
