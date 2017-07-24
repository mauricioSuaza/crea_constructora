class ContactMailer < ApplicationMailer

  def contact_email(message)
    @name = message.name
    @email = message.email
    @content = message.content
    mail(to: "mauriciosuazauribe@gmail.com", subject: 'You have a new message at Crea').deliver!
  end

end
