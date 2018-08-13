ActiveAdmin.register Attendee do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :name, :login
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end
	filter  :login
	index do
		column(:login) { |attendee| link_to attendee.login, admin_attendee_path(attendee)}
		column :name
				column("Sign in"){|item| item.stamps.last}
		column("Sign out"){ |item| item.stamps.last}
		actions
	end

	show do
		panel "Stamps" do
			table_for attendee.stamps do
				column "Sign in" do |stamp|
					stamp.sign_in.strftime "%B %e at %l:%M %p"
				end
				column "Sign out" do |stamp|
					stamp.sign_out.strftime "%B %e at %l:%M %p"
				end
			end
		end
	end
end

# ActiveAdmin.register Stamp do
#   belongs_to :attendee # nested below resource user
# end
