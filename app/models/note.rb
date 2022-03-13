class Note < ApplicationRecord  

validates :number, :title, :body, presence: true
validates :number, uniqueness: true
end
