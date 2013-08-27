get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end

post '/grandma' do
  puts "here are params inside sinatra post"
  p params
  #{}"Implement the /grandma route yourself.<br>Params: <code>#{params.inspect}</code>"
  @input = params[:user_input]
  
   if @input == @input.upcase
      @grandma = "I love gerbils!"
   else
      @grandma = "speak up, sonny!"
   end

  if request.xhr?
    puts "inside the ajax request"
    erb :index, layout: false
  else
    redirect to("/?grandma=#{@grandma}")
  end
end
