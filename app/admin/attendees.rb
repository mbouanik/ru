ActiveAdmin.register Attendee do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end
controller do
    def scoped_collection
      Attendee.includes(:stamps)
    end
  end
filter  :login

index do
	column (:login) { |attendee| link_to attendee.login, admin_attendee_path(attendee)}
   column :name
  column "Sign in"
  column"Sign out"

  end
	show do
		panel "Stamps" do
			table_for attendee.stamps do
				column "Sign in" do |stamp|
					stamp.sign_in
				end
				column "Sign out" do |stamp|
					stamp.sign_out
				end
			end
		end
	end
end
