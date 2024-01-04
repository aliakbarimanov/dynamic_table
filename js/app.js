const users = [
    {
        "firstName": "Jhon",
        "lastName": "Doe",
        "age": 40,
        "mail": "jhon.doe@example.com",
        "address": "Usa",
        "phone": "555-785-99-68",
        "birthDate": "01.01.2000"
    }
];

let bodyTr = "";
let headTr = "";

for(key in users[0]){

    headTr += `<tr><th>${key}</th></tr>`;
    
    for(val of users){
        bodyTr += `<tr><td>${val[key]}</td></tr>`;
    }
}

const root = document.querySelector("#root");

root.innerHTML = `<table><thead>${headTr}</thead><tbody>${bodyTr}</tbody></table>`;