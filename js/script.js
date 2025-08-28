// fetch categories
const loadCatagories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCatagories(data.categories))
    .catch((error) => console.log(error));
};

// display categories
const displayCatagories = (categories) => {
  const catagoryContainer = document.getElementById("catgory");

  categories.forEach((item) => {
    console.log(item);

    // create button
    const button = document.createElement("button");
    button.classList.add("btn"); 
    button.innerText = item.category; 

    // add button
    catagoryContainer.append(button);
  });
};

loadCatagories();

