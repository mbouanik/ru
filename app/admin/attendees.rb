ActiveAdmin.register Attendee do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params  :login, :user_id, :id, :stamps
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

# scope :sign_in
# scope :sign_out

	filter  :login
	index do |attendees|
		selectable_column
		column(:login) { |attendee| link_to attendee.login, admin_attendee_path(attendee)}
		column :name
		column("Sign in"){ |item| item.stamps.last["sign_in"].strftime "%B %e at %l:%M %p" unless item.stamps.last.nil?}
		column("Sign out"){ |item| item.stamps.last["sign_out"].strftime "%B %e at %l:%M %p" unless item.stamps.last.nil? || item.stamps.last.sign_out.nil?}
	end

	show do

		panel "Stamps" do
			table_for attendee.stamps.order("created_at DESC") do |stamps|
				column "Sign in" do |stamp|
					stamp.sign_in.strftime "%B %e at %l:%M %p" unless stamp.nil?
				end
				column "Sign out" do |stamp|
					stamp.sign_out.strftime "%B %e at %l:%M %p"unless stamp.sign_out.nil?
				end
				column( "Delete"){ | stamp| link_to "delete", stamp_delete_path(id: stamp.id), :method => :delete, remote: true}
			end
		end
	end
end

# ActiveAdmin.register Stamp do
#   belongs_to :attendee # nested below resource user
# end
