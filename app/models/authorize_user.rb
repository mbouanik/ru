class AuthorizeUser < ApplicationRecord
	validates :login, presence:  { message: "Doesn't Exist" }, length: { maximum: 10 }, uniqueness: {case_sensitive: false}
end
