class AuthorizedUser < ApplicationRecord
		validates :login, presence: true, length: { maximum: 10 }, uniqueness: {case_sensitive: false}
end
