def GenerateHtmlElement (element, Content, values = "") :
    values = " " + values if values != "" else  ""
    return "<"+element + values+"> " + Content + " </"+element+">"
