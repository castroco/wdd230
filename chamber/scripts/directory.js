const jsonData = "https://castroco.github.io/wdd230/chamber/info/data.json";
cardsContainer = document.querySelector('#cardsContainer');
console.log("cardsContainer:", cardsContainer);


fetch(jsonData).then(function (response) {
    return response.json();
})
    .then(function (jsonObject) 
        {
            console.log("jsonObjectCompaniesData: ", jsonObject);
            companies = jsonObject['companies'];
            console.log("companies: ", companies);
            companies.forEach(showCompany);
        }
    );

function showCompany(singleCompany) {  
    let companyCard = document.createElement('section');
    let companyImage = document.createElement('img');
    let companyName = document.createElement('h3');
    let companyAddress = document.createElement('p');
    let companyPhone = document.createElement('p');
    let companyLevel = document.createElement('p');
    let companyLink = document.createElement('a');
    
    companyImage.setAttribute('src', singleCompany.icon);
    companyImage.setAttribute('alt', `Company Icon`);
    /*console.log("random number: ", Math.floor(Math.random() * 3));*/
    companyName.textContent = `${singleCompany.name}`;
    companyAddress.textContent = `${singleCompany.address}`;
    companyPhone.textContent = `${singleCompany.phone}`;
    companyLevel.textContent = `${singleCompany.level}`;
    companyLink.textContent = `${singleCompany.website}`;
    
    
    
    companyCard.appendChild(companyImage);
    companyCard.appendChild(companyName);
    companyCard.appendChild(companyAddress);
    companyCard.appendChild(companyPhone);
    companyCard.appendChild(companyLevel);
    companyCard.appendChild(companyLink);
    cardsContainer.appendChild(companyCard);
}



/*const cardsButton = document.querySelector("#cardsIcon");
cardsButton.addEventListener("click", () => {
    cardsContainer.classList.replace("displayList","displayCards");
});

const listButton = document.querySelector("#listIcon");
listButton.addEventListener("click", () => {
    cardsContainer.classList.replace("displayCards","displayList");
});*/