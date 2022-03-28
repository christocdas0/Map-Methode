// MAP Method

let tableBody = document.getElementById("tbody");

// get the users details and store the details in the table

$.get("https://jsonplaceholder.typicode.com/users", function (result) {
  getData(result);
});

let tableHead = document.getElementById("thead");
// table head
tableHead.innerHTML = `
  <tr>
      <th>No.</th>
      <th>Name</th>
      <th>user name</th>
      <th>email</th>
      <th>phone</th>
  </tr>`;

function getData(data) {
  data.map((datas) => {
    tableBody.innerHTML += `
      <tr>
        <td>${datas.id}</td>
        <td>${datas.name}</td>
        <td>${datas.username}</td>
        <td>${datas.email}</td>
        <td>${datas.phone}</td>

      </tr>
    `;
  });
}
