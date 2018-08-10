class AuthorizedUser < ApplicationRecord
		validates :login, length: { maximum: 10 }, uniqueness: {case_sensitive: false}
end
