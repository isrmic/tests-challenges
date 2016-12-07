def GenerateHtmlElement (element, Content, values = "") :
    values = " " + values if values != "" else  ""
    return "<"+element + values+"> " + Content + " </"+element+">"

def set(expression):
    print(expression)
    #exec(expression)

var = eval("print('hello world')")
