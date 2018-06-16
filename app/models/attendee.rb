class Attendee < ApplicationRecord
  belongs_to :user
  has_many :stamps, dependent: :delete_all
end
