def LogicHappyNumber (number, _list = []):

    if number == 1:
        return True
    if number in _list:
        return False
    else:
        acc = 0
        number = str(number)
        for i in number :
            acc += int(i) ** 2
            _list.append(int(i))
        if acc == 1:
            return True
        else:
            print(_list)
            return LogicHappyNumber(acc, _list)



def TesteNumberIsHappy(number):

    n_expected = True
    n_returned = bool(LogicHappyNumber(number))
    if n_expected != n_returned:
        print("Fail , expected {} but returned {} ".format(n_expected, n_returned))
    else:
        print("Test Ok, number is happy")




number = int(input("insira um número para ser realizado o teste : "))
TesteNumberIsHappy(number)
