const users = [
    {
        "firstName": "Jhon",
        "lastName": "Doe",
        "age": 40,
        "mail": "jhon.doe@example.com",
        "address": "Usa",
        "phone": "555-785-99-68",
        "birthDate": "01.01.2000"
    },
    {
        "firstName": "Terry",
        "lastName": "Fry",
        "age": 22,
        "mail": "terry@example.com",
        "address": "Usa",
        "phone": "444-56-85-89",
        "birthDate": "01.01.2020"
    },
];

let bodyTr = "";
let headTr = "";

for (key in users[0]) {
    headTr += `<th>${key}</th>`;
}

// for (key in users[0]) {
//     headTr = `<th>${key}</th>`;

//     for(value of users){
//         bodyTr += `<td>${value}</td>`;
//     }
// }

const root = document.querySelector("#root");

root.innerHTML =
    `
                        <table class="table table-striped table-bordered table-hover text-capitalize">
                            <thead>
                                <tr>${headTr}</tr>
                            </thead>
                            <tbody>
                                <tr>${bodyTr}</tr>
                            </tbody>
                        </table>
                    `;

for (key in users[0]) {
    for (let i = 0; i < users.length; i++) {

        // console.log(users[i].key);

        bodyTr += users[i].key;

    }
}