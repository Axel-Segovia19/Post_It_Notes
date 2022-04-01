10.times do 
  note = Note.create(
    title: Faker::Games::Pokemon.name,
    body: Faker::Lorem.paragraphs(number: 1)
  )
end 

puts 'Data seeded'