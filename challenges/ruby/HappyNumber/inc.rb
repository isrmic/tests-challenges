class LogicHappyNumber

    def initialize(tentativa)
        puts tentativa
    end

    def HappyNumber(numbers, list = [])

        if numbers == 1
            return true
        end
        if list.include? numbers
            return false
        else
            list.push(numbers)
            len = numbers.to_s
            len = len.split("")
            numbers = 0
            for i in len
                numbers += i.to_i * i.to_i
            end
        end

        if numbers == 1
            return true
        else
            return HappyNumber(numbers, list)
        end
    end
end
