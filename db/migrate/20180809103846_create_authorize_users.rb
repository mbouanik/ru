class CreateAuthorizeUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :authorize_users do |t|
      t.string :login

      t.timestamps
    end
  end
end
