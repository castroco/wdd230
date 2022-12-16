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