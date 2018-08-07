class Attendee < ApplicationRecord
	validates :login, presence:  { message: "Not Valid login" }, length: { maximum: 20 }, uniqueness: {case_sensitive: false }
	belongs_to :user
	has_many :stamps, dependent: :delete_all
end
