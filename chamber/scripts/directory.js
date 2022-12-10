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
    companyName.textContent = `${singleCompany.name}`;
    companyAddress.textContent = `${singleCompany.address}`;
    companyPhone.textContent = `${singleCompany.phone}`;
    companyLevel.textContent = `Membership Level: ${singleCompany.level}`;
    companyLink.setAttribute('href', singleCompany.website);
    companyLink.setAttribute('target', '_blank');
    companyLink.textContent = `Visit Website`;
    
    
    
    companyCard.appendChild(companyImage);
    companyCard.appendChild(companyName);
    companyCard.appendChild(companyAddress);
    companyCard.appendChild(companyPhone);
    companyCard.appendChild(companyLevel);
    companyCard.appendChild(companyLink);
    cardsContainer.appendChild(companyCard);
}



const cardButton = document.querySelector("#cardButton");
cardButton.addEventListener("click", () => {
    cardsContainer.classList.replace("list","grid");
});

const listButton = document.querySelector("#listButton");
listButton.addEventListener("click", () => {
    cardsContainer.classList.replace("grid","list");
});