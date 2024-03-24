var pecipeList = [{
    "idMeal": "1",
    "img": "https://www.tastingtable.com/img/gallery/penne-arrabiata-recipe-best-pasta-recipes-spicy-tomato-sauce/penne-arrabiata-recipe-1641224585.jpg",
    "rating": "4.5",
    "reviews": "34",
    "name": "Spicy Arrabiata Penne",
    "time": "30 min",
    "hardness": "easy",
    "Category": "Vegetarian",
    "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. ",
    "Ingridiensts": "<li>Rice - 250g</li><li>water - 500ms</li><li>egg</li>",
    "Nutrition": "250cal|54g|23g|17g",
    "Price": "$25"
},
{
    "idMeal": "2",
    "name": "Teriyaki Chicken Casserole",
    "img": "https://kikkomanusa.com/homecooks/wp-content/uploads/2022/02/Teriyaki-Chicken-Casserole-Photo-Site.jpg",
    "rating": "2",
    "reviews": "16",
    "time": "20 min",
    "hardness": "medium",
    "Category": "Non-vegan",
    "strInstructions": "Preheat oven to 350\u00b0 F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, \u00bd cup water, brown sugar, ginger and garlic in a small saucepan and cover.  ",
    "Ingridiensts": "<li>chicken - 250g</li><li>water - 500ms</li><li>eggs - 2</li>",
    "Nutrition": "350cal|15g|23g|21g",
    "Price": "$24"
},
{
    "idMeal": "3",
    "img": "https://mma.prnewswire.com/media/2045665/Tim_Hortons_April_1_Alert__Tim_Hortons_testing_Square_Timbits_at.jpg?p=twitter",
    "rating": "3",
    "reviews": "1",
    "name": "Timbits",
    "time": "90 min",
    "hardness": "hard",
    "Category": "Dessert",
    "strInstructions": "Sift together dry ingredients.\r\nMix together wet ingredients and incorporate into dry. Stir until smooth.\r\nDrop by teaspoonfuls(no bigger) into hot oil (365 degrees, no hotter), ",
    "Ingridiensts": "<li>flour - 250g</li><li>water - 500ms</li><li>eggs - 2</li>",
    "Nutrition": "250cal|54g|33g|17g",
    "Price": "$14"
},
{
    "idMeal": "4",
    "name": "Cevapi Sausages",
    "img": "https://www.seriouseats.com/thmb/2uspI5RtmIyXYVCbCgs1ljl8Fks=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20230307-SEA-Kedgeree-AmandaSuarez-17-a311881136f14c34bfad1d0d6c246cee.JPG",
    "rating": "1",
    "reviews": "14",
    "time": "10 min",
    "hardness": "easy",
    "Category": "Non-vegan",
    "strInstructions": "Preheat oven to 350\u00b0 F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, \u00bd cup water, brown sugar, ginger and garlic in a small saucepan and cover.  ",
    "Ingridiensts": "<li>Onion - 50g</li><li>Fish -250g</li><li>Lemon - 1/2</li>",
    "Nutrition": "150cal|15g|23g|21g",
    "Price": "$20"
},
{
    "idMeal": "5",
    "img": "https://www.allrecipes.com/thmb/GwdML2o-xsFGnHTEp-uy7RWMEOc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/166638-baked-buffalo-wings-ddmfs-beauty-3x4-90787930d20b402e9dde79c22fced332.jpg",
    "rating": "4",
    "reviews": "74",
    "name": "Spicy Chicken Wings",
    "time": "40 min",
    "hardness": "easy",
    "Category": "Non-Vegan",
    "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. ",
    "Ingridiensts": "<li>Chicken Wings - 250g</li><li>oil - 500ms</li><li>egg</li>",
    "Nutrition": "250cal|54g|23g|17g",
    "Price": "$15"
}
];


const input = document.getElementById('Search');

input.addEventListener("search", addEventListener("search", () => {
    var newarray = []
    for (let i = 0; i < pecipeList.length; i++) {
        if (pecipeList[i].name.includes(input.value)) {
            newarray.push(pecipeList[i])
           
        }}console.log(newarray);
        codeAddress(newarray);
})); 





// sort by time
function sortTime() {

    pecipeList = pecipeList.sort((a, b) => {
        if (a.time < b.time) {
            return -1;
        }
    });
    codeAddress(pecipeList);
}

function codeAddress(array) {
    document.getElementById("paginated-list").innerHTML = "";

    for (let i = 0; i < array.length; i++) {

        let meal = document.createElement("li");
        document.getElementById("paginated-list").appendChild(meal);
        meal.classList.add("li", "meal_card");
        let rating = document.createElement("div");
        rating.classList.add("card_rating");

        for (let x = 0; x < 5; x++) {
            if (x >= array[i].rating) {
                let img = document.createElement("img");
                img.style.height = "15px";
                img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsmn6LPTD6BY0te9Qk_9jM_mOBcbVn8lae9w&usqp=CAU";
                rating.append(img)
            } else {
                let img = document.createElement("img");
                img.style.height = "15px";
                img.src = "https://freeiconshop.com/wp-content/uploads/edd/star-curved-outline-filled.png";
                rating.append(img)
            };
        }

        const card_list = document.createElement("div");
        card_list.insertAdjacentHTML("beforeend", `
    <a href="#" class="meal_link">
        <img src="${array[i].img}" class="card_img">
            <div class="card_rating">

               ${rating.innerHTML}
                    ${array[i].reviews} Ratings
            </div>
        </img>
        <div class="card_body">
            <div class="card_name">
                ${array[i].name}
            </div>
            <div class="card_properties">
                <div class="properties_circle"><img
                        src="https://cdn-icons-png.flaticon.com/512/826/826165.png" width="25px" alt="">
                </div>${array[i].time}
                <div class="properties_circle"><img
                        src="https://cdn-icons-png.flaticon.com/512/7780/7780470.png" width="25px"
                        alt="">
                </div>${array[i].hardness}
                <div class="properties_circle"><img
                        src="https://cdn-icons-png.flaticon.com/512/5627/5627100.png" width="25px"
                        alt="">
                </div>${array[i].Category}
            </div>

                <p class="card_description">${array[i].strInstructions}</p>
                <ul class="card_list">
                ${array[i].Ingridiensts}
                </ul>

            <div class="card_nurtition_price">
                <div class="nutrition">${array[i].Nutrition}</div>
                <div class="price"><b>${array[i].Price}</b></div>
            </div>
        </div>
    </a>`,
            meal.append(card_list)
        );
    } pagination()
}

function pagination() {
    document.getElementById("pagination-numbers").innerHTML = ""
    // pagination
    const paginationNumbers = document.getElementById("pagination-numbers");
    const paginatedList = document.getElementById("paginated-list");
    const listItems = paginatedList.querySelectorAll(".li");
    const nextButton = document.getElementById("next-button");
    const prevButton = document.getElementById("prev-button");

    const paginationLimit = 3;
    const pageCount = Math.ceil(listItems.length / paginationLimit);
    let currentPage = 1;

    const disableButton = (button) => {
        button.classList.add("disabled");
        button.setAttribute("disabled", true);
    };

    const enableButton = (button) => {
        button.classList.remove("disabled");
        button.removeAttribute("disabled");
    };

    const handlePageButtonsStatus = () => {
        if (currentPage === 1) {
            disableButton(prevButton);
        } else {
            enableButton(prevButton);
        }

        if (pageCount === currentPage) {
            disableButton(nextButton);
        } else {
            enableButton(nextButton);
        }
    };

    const handleActivePageNumber = () => {
        document.querySelectorAll(".pagination-number").forEach((button) => {
            button.classList.remove("active");
            const pageIndex = Number(button.getAttribute("page-index"));
            if (pageIndex == currentPage) {
                button.classList.add("active");
            }
        });
    };

    const appendPageNumber = (index) => {
        const pageNumber = document.createElement("button");
        pageNumber.className = "pagination-number";
        pageNumber.innerHTML = index;
        pageNumber.setAttribute("page-index", index);
        pageNumber.setAttribute("aria-label", "Page " + index);

        paginationNumbers.appendChild(pageNumber);
    };

    const getPaginationNumbers = () => {
        for (let i = 1; i <= pageCount; i++) {
            appendPageNumber(i);
        }
    };

    const setCurrentPage = (pageNum) => {
        currentPage = pageNum;

        handleActivePageNumber();
        handlePageButtonsStatus();

        const prevRange = (pageNum - 1) * paginationLimit;
        const currRange = pageNum * paginationLimit;

        listItems.forEach((item, index) => {
            item.classList.add("hidden");
            if (index >= prevRange && index < currRange) {
                item.classList.remove("hidden");
            }
        });
    };


    getPaginationNumbers();
    setCurrentPage(1);

    prevButton.addEventListener("click", () => {
        setCurrentPage(currentPage - 1);
    });

    nextButton.addEventListener("click", () => {
        setCurrentPage(currentPage + 1);
    });

    document.querySelectorAll(".pagination-number").forEach((button) => {
        const pageIndex = Number(button.getAttribute("page-index"));

        if (pageIndex) {
            button.addEventListener("click", () => {
                setCurrentPage(pageIndex);
            });
        }
    });

}
window.onload = codeAddress(pecipeList)
