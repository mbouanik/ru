class Attendee < ApplicationRecord
	validates :login, presence: true, length: { maximum: 20 }, uniqueness: {case_sensitive: false }
	validates :name, presence: true
	belongs_to :user
	has_many :stamps, dependent: :delete_all
end
