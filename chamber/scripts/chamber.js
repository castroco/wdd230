const jsonData1 = "https://castroco.github.io/wdd230/chamber/info/data.json";
let highLevelcomp = [];
let numberOfElements = 0;


fetch(jsonData1).then(function (response) {
    return response.json();
})
    .then(function (jsonObject) 
        {
            console.log("jsonObjectCompaniesData: ", jsonObject);
            companies = jsonObject['companies'];
            console.log("companies: ", companies);
            companies.forEach(findCompany);
            selectSpotlight();
            /*
            console.log("HCL: ", highLevelcomp);
            console.log("HCL0: ", typeof(highLevelcomp));
            console.log("Final numberOfElements: ", numberOfElements);
            console.log("random number: ", Math.floor(Math.random() * numberOfElements));
            console.log("HCL[random]: ", highLevelcomp[Math.floor(Math.random() * numberOfElements)]);
            
            const spotlight1 = document.querySelector("spotlightDiv1");

            */
        }
    );

function findCompany(singleCompany) {  

    if (singleCompany.level >= 3) {
        highLevelcomp.push(singleCompany);
        numberOfElements = numberOfElements + 1;
    }
}

function selectSpotlight() {
    console.log("HCL: ", highLevelcomp);
    console.log("HCL0: ", typeof(highLevelcomp));
    console.log("Final numberOfElements: ", numberOfElements);
    console.log("random number: ", Math.floor(Math.random() * numberOfElements));

    let selectedCompany = highLevelcomp[Math.floor(Math.random() * numberOfElements)];
    console.log("selectedCompany.icon: ", selectedCompany.icon); 

    let companyImage = document.createElement('img');
    let companyName = document.createElement('h3');
    let companyPhone = document.createElement('p');
    let companyLevel = document.createElement('p');
    let companyLink = document.createElement('a');

    companyImage.setAttribute('src', selectedCompany.icon);
    companyImage.setAttribute('alt', `Company Icon`);
    companyImage.setAttribute('class', `memberLogo`);
    companyName.textContent = `${selectedCompany.name}`;
    companyPhone.textContent = `${selectedCompany.phone}`;
    companyLevel.textContent = `Membership Level: ${selectedCompany.level}`;
    companyLink.setAttribute('href', selectedCompany.website);
    companyLink.setAttribute('target', '_blank');
    companyLink.textContent = `Visit Website`;
    
    const spotlight1 = document.querySelector("#spotlightDiv1");
    spotlight1.innerHTML = "";
    spotlight1.appendChild(companyImage);
    spotlight1.appendChild(companyName);
    spotlight1.appendChild(companyPhone);
    spotlight1.appendChild(companyLevel);
    spotlight1.appendChild(companyLink);



    let selectedCompany2 = highLevelcomp[Math.floor(Math.random() * numberOfElements)]; 

    let companyImage2 = document.createElement('img');
    let companyName2 = document.createElement('h3');
    let companyPhone2 = document.createElement('p');
    let companyLevel2 = document.createElement('p');
    let companyLink2 = document.createElement('a');
    
    companyImage2.setAttribute('src', selectedCompany2.icon);
    companyImage2.setAttribute('alt', `Company Icon`);
    companyName2.textContent = `${selectedCompany2.name}`;
    companyPhone2.textContent = `${selectedCompany2.phone}`;
    companyLevel2.textContent = `Membership Level: ${selectedCompany2.level}`;
    companyLink2.setAttribute('href', selectedCompany2.website);
    companyLink2.setAttribute('target', '_blank');
    companyLink2.textContent = `Visit Website`;
    
    const spotlight2 = document.querySelector("#spotlightDiv2");
    spotlight2.innerHTML = "";
    spotlight2.appendChild(companyImage2);
    spotlight2.appendChild(companyName2);
    spotlight2.appendChild(companyPhone2);
    spotlight2.appendChild(companyLevel2);
    spotlight2.appendChild(companyLink2);



    let selectedCompany3 = highLevelcomp[Math.floor(Math.random() * numberOfElements)]; 

    let companyImage3 = document.createElement('img');
    let companyName3= document.createElement('h3');
    let companyPhone3 = document.createElement('p');
    let companyLevel3 = document.createElement('p');
    let companyLink3 = document.createElement('a');
    
    companyImage3.setAttribute('src', selectedCompany2.icon);
    companyImage3.setAttribute('alt', `Company Icon`);
    companyName3.textContent = `${selectedCompany2.name}`;
    companyPhone3.textContent = `${selectedCompany2.phone}`;
    companyLevel3.textContent = `Membership Level: ${selectedCompany2.level}`;
    companyLink3.setAttribute('href', selectedCompany2.website);
    companyLink3.setAttribute('target', '_blank');
    companyLink3.textContent = `Visit Website`;
    
    const spotlight3 = document.querySelector("#spotlightDiv3");
    spotlight3.innerHTML = "";
    spotlight3.appendChild(companyImage3);
    spotlight3.appendChild(companyName3);
    spotlight3.appendChild(companyPhone3);
    spotlight3.appendChild(companyLevel3);
    spotlight3.appendChild(companyLink3);

}






function addFooter () {
    let date = new Date();
    let year = date.getFullYear();
    const nameLine = document.querySelector("#name");
    let message = `&#169; ${year} .:|:. Carlos O. Castro .:|:. Santiago`;
    nameLine.innerHTML = message;

    const lastUpdateLine = document.querySelector("#lastupdate");
    message = `Last updated: ${document.lastModified}`;
    lastUpdateLine.innerHTML = message;
}
addFooter();
const hambutton = document.querySelector('#menuButton');
const mainnav = document.querySelector('#colapsableList');
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);