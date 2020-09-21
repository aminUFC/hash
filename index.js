import data from "./data";
import HashTable from "./HashTable";

// const Table = new HashTable({ data, mappedKeys: ["name"] });
console.time('dataTime')
let Data = data(10000)
console.timeEnd('dataTime')
console.time('HashTime')
const Table = new HashTable({ Data, mappedKeys: ["firstName"] });
console.timeEnd('HashTime')


const tableElement = document.getElementById("table");
const searchInput = document.getElementById("search");
const tbody = document.getElementById("tby");

searchInput.addEventListener("keyup", (event) => {
  cleanmenu(tbody)
  const keyword = event.target.value;
  Table.search(keyword).map((element,num)=>{
    if(num>9){
      return 
    }
    tdCreation(element)
  })
});
function cleanmenu(menu) {
  while (menu.firstChild) {
      menu.removeChild(menu.firstChild);
  }
}
function tdCreation(element){
  let cre = document.createElement("tr");
  
  let cre1 = document.createElement("td");  
  let cre2 = document.createElement("td");
  let cre3 = document.createElement("td");
  let cre4 = document.createElement("td");
  let cre5 = document.createElement("td");
  cre1.getAttribute('colspan','1')
  cre2.getAttribute('colspan','1')
  cre3.getAttribute('colspan','1')
  cre4.getAttribute('colspan','1')
  cre5.getAttribute('colspan','1')
  cre1.textContent = element.firstName
  cre2.textContent = element.lastName
  cre3.textContent = element.age
  cre4.textContent = element.visits
  cre5.textContent = element.progress
  cre.appendChild(cre1)
  cre.appendChild(cre2)
  cre.appendChild(cre3)
  cre.appendChild(cre4)
  cre.appendChild(cre5)
  tbody.appendChild(cre)
}
/**
 <tr class="odd:bg-gray-100">
  <td class="border px-4 py-2">first</td>

  <td class="border px-4 py-2">1500</td>

  <td class="border px-4 py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum itaque accusamus facilis nulla perferendis sit? Suscipit rerum fugit vero itaque, veritatis esse ipsum recusandae ullam blanditiis autem quas, eligendi dolor!</td>
</tr>
 */
