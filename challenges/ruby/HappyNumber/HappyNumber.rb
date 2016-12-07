load "inc.rb"

$count = 0

def TesteNumberIsHappy(number)

    $count += 1

    des = LogicHappyNumber.new("Tentativa #{$count}, número #{number}\n\n")

    expected = true
    returned = des.HappyNumber(number)

    if expected != returned
        puts "Error , expected #{expected}, but returned #{returned} .\n\n"
    else
        puts "test is Ok !!! \n\n"
    end

end


TesteNumberIsHappy(100)
#TesteNumberIsHappy(7)
TesteNumberIsHappy(4)
#TesteNumberIsHappy(19)
#TesteNumberIsHappy(21)
puts "Insira um número para ser realizado o teste : "
number = gets()
TesteNumberIsHappy(number.to_i)
