var container=creation("class","container");
var row=creation("class","row");
var col=creation("class","col-lg-12 col-md-12 col-sm-12");
row.append(col);
container.append(row);
document.body.append(container);

var h=document.createElement("h1");
h.innerHTML="COSMETIC PRODUCTS";
col.append(h);

/*menu bar*/
var menu=creation("id","menu");
var cont=creation("id","contq");
var d1=m("HOME");
var d2=m("BLUSH");
var d3=m("BRONZER");
var d4=m("EYEBROW");
var d5=m("EYELINER");
var d6=m("EYEBROW");
var d7=m("EYESHADOW");
var d8=m("FOUNDATION");
var d9=m("LIP");
cont.append(d1,d2,d3,d4,d5,d6,d7,d8,d9);
menu.append(cont);
col.append(menu);


/*search area*/
var upper=creation("class","searcharea");
var search=document.createElement("input");
search.setAttribute("type","text");
search.setAttribute("id","cont");
search.setAttribute("placeholder","Enter the product name");
var button=document.createElement("button");
button.innerHTML="Search";
button.setAttribute("id","search");
button.setAttribute("onClick","s()");
upper.append(search,button);
menu.append(upper);

/*table area*/

var table=document.createElement("table");
table.setAttribute("id","tab");
var thead=document.createElement("thead");
var tr=document.createElement("tr");
var th1=tabledetails("Id");
var th2=tabledetails("Brand");
var th3=tabledetails("Name of the Product");
var th4=tabledetails("Price of the Product");
var th5=tabledetails("Image");
var th6=tabledetails("Product Link");
var th7=tabledetails("Description");
var tbody=document.createElement("tbody");
tr.append(th1,th2,th3,th4,th5,th6,th7);
thead.append(tr);
table.append(thead,tbody);
col.append(table);

async function make(){
    try{
    let res=await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");
    let res1=await res.json();
    console.log(res1);
    var row=1;
   for(var i=0;i<res1.length;i++)
   {
       

  let tr2 = document.createElement('tr');

  let td1 = document.createElement('td');
  td1.innerHTML = res1[i]["id"];
  let td2 = document.createElement('td');
  td2.innerHTML = res1[i]["brand"];
  let td3 = document.createElement('td');
  td3.innerHTML = res1[i]["name"];
  let td4 = document.createElement('td');
  td4.innerHTML = `$${res1[i]["price"]}`;
  let td5 = document.createElement('td');
  td5.innerHTML = `<img src="${res1[i].image_link}" class="img-fluid" alt="No image available">`;
  let td6 = document.createElement('td');
  td6.innerHTML = `<a href="${res1[i]["product_link"]}" target="_blank">${res1[i]["product_link"]}</a>`;
  let td7 = document.createElement('td');
  td7.innerHTML = res1[i]["description"];

  tr2.append(td1, td2, td3 ,td4,td5,td6,td7);
  tbody.append(tr2);
   }

}catch(error){
    console.log(error);
}
}
make();


/*table function*/

function tabledetails(x){
    var one=document.createElement("th");
    one.innerHTML=x;
    return one;
}
function creation(x,y){
    var two=document.createElement("div");
    two.setAttribute(x,y);
    return two;
}
function m(z){
    var three=document.createElement("button");
    three.setAttribute("class","op");
    three.innerHTML=z;
    return three;
}

/*search function*/

function s() {

    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("cont").value;
    filter = input.toUpperCase();
    table = document.getElementById("tab");
    tr = table.getElementsByTagName("tr");
    
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }



