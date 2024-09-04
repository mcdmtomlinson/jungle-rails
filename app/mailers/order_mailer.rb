class OrderMailer < ApplicationMailer
  default from: 'no-reply@jungle.com'

  def order_placed_email
    @order = params[:order]
    @line_items = @order.line_items
    @products = @line_items.reduce([]) do |array, item| 
      array << item.product
      array
    end
    mail(to: @order.email, subject: "Your order ##{@order.id} is on the way!")
  end
end