

document.addEventListener("DOMContentLoaded", function () {
    fetchData();
});



function fetchData() {
    

    fetch("data.json")
    .then(response => response.json())
    .then(data => { 
        displayData(data)
    })
    .catch(error => console.error("Error fetching data: ", error));
}

function displayData(data) {

    const sections = document.querySelectorAll(".section");
    const titles = document.querySelectorAll(".title");
    const container = document.querySelector(".summary-container");
    
    data.forEach((item, index) => {
        const section = sections[index];
        const title = titles[index];

        const icon = document.createElement("img");
        icon.src = item.icon;
        icon.alt = `icon ${item.category}`;

        title.appendChild(icon);

        const category = document.createElement("h4");
        category.textContent = item.category;

        title.appendChild(category);
    
        const score = document.createElement("p");
        score.innerHTML = `${item.score} <span>/ 100</span>`;

        section.appendChild(score);
    })
}