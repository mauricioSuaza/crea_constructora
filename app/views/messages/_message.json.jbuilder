json.extract! message, :id, :name, :email, :phone, :subject, :content, :created_at, :updated_at
json.url message_url(message, format: :json)
