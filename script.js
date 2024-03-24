var pecipeList = [{
    "idMeal": "1",
    "name": "Spicy Arrabiata Penne",
    "time": "20 min",
    "hardness": "easy",
    "Category": "Vegetarian",
    "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. ",
    "Ingridiensts": "<li>Rice 250g</li><li>water 500ms</li><li>egg 2</li>",
    "Nutrition": "250cal|54g|23g|17g",
    "Price": "$24"
},
{
    "idMeal": "2",
    "name": "Teriyaki Chicken Casserole",
    "time": "30 min",
    "hardness": "hard",
    "Category": "Chicken",
    "strInstructions": "Preheat oven to 350\u00b0 F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, \u00bd cup water, brown sugar, ginger and garlic in a small saucepan and cover.  ",
    "Ingridiensts": "<li>chicken 250g</li><li>water 500ms</li><li>egg 2</li>",
    "Nutrition": "350cal|15g|23g|21g",
    "Price": "$24"
}
];

for (i = 0; i < pecipeList.length; i++) {
    var mealName1 = document.createElement("li");
    console.log(mealName1.innerHTML);
    document.getElementById("paginated-list").appendChild(mealName1);
    mealName1.classList.add("li", "card_name");
    mealName1.innerHTML = pecipeList[i].name
    console.log(mealName1.innerHTML);
    
}

