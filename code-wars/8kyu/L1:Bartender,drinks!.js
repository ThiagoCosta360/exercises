function getDrinkByProfession(param) {
    var p = param.toLowerCase()
    if (p == "jabroni") return "Patron Tequila"
    if (p == "school counselor") return "Anything with Alcohol"
    if (p == "programmer") return "Hipster Craft Beer"
    if (p == "bike gang member") return "Moonshine"
    if (p == "politician") return "Your tax dollars"
    if (p == "rapper") return "Cristal"
    else return "Beer"
}