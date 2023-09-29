const tableBody = document.querySelector(".table-body");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    data.map((item) => {
      const tableRow = document.createElement("tr");
      const idData = document.createElement("th");
      const nameData = document.createElement("td");
      const descriptionData = document.createElement("td");
      const priceData = document.createElement("td");
      const updateData = document.createElement("td");
      const deleteData = document.createElement("td");
      const updateBtn = document.createElement("button");
      const deleteBtn = document.createElement("button");

      idData.innerText = item.id;
      nameData.innerText = item.title.slice(1, 30);
      descriptionData.innerText = item.description.slice(1, 80);
      priceData.innerText = item.price;

      updateBtn.classList.add("btn");
      updateBtn.classList.add("btn-primary");
      deleteBtn.classList.add("btn");
      deleteBtn.classList.add("btn-danger");

      updateBtn.setAttribute("onclick", `updateItem(${item.id})`);
      deleteBtn.setAttribute("onclick", `deleteItem(${item.id})`);

      updateBtn.innerText = "Update";
      deleteBtn.innerText = "Delete";

      updateData.appendChild(updateBtn);
      deleteData.appendChild(deleteBtn);

      tableRow.appendChild(idData);
      tableRow.appendChild(nameData);
      tableRow.appendChild(descriptionData);
      tableRow.appendChild(priceData);
      tableRow.appendChild(updateData);
      tableRow.appendChild(deleteData);

      tableBody.appendChild(tableRow);

      // tableBody.innerHTML += `
      // <tr class="table-row">
      //     <th scope="row" class="table-head text-center">${item.id}</th>
      //     <td class="table-data text-center">${item.title.slice(1,30)}</td>
      //     <td class="table-data text-center">${item.description.slice(1,80)}</td>
      //     <td class="table-data text-center">${item.price}</td>
      //     <td class="table-data text-center"><button class="btn btn-primary mx-1" onclick="updateItem(${item.id})"> Update </button><button class="btn btn-danger mx-1" onclick="deleteItem(${item.id})"> Delete </button></td>
      // </tr>
      // `
    });
  });

function deleteItem(element) {
  console.log(element);
  fetch(`https://fakestoreapi.com/products/${element}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function updateItem(e) {
  console.log(e);
  fetch(`https://fakestoreapi.com/products/${e}`, {
    method: "PUT",
    body: {
      id: e,
      title: "gfgfdf",
      description: "ffgfffgfhhergg",
      price: 10.99,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
}
