let headersList = {
    "Accept": "*/*",
    "Authorization": "Bearer Ymtawv7x9wUmVosrKWSSdH8xElueJ9iOT2h6vIAv5EP4sVf1OpXnzutZsneF"
   }
   
 

   fetch("https://www.nosyapi.com/apiv2/pharmacy/getAll", { 
    method: "GET",
    headers: headersList
  }).then((response) => response.json()) //parse json data
   .then(function (data) {
   console.log(data);
   console.log(data.data.length);

   for (let i = 0; i < data.data.length; i++) {
     let satir ="<tr>"+
       "<td>"+data.data[i].Sehir+"</td>"+
       "<td>"+data.data[i].ilce+"</td> "+
       "<td>"+data.data[i].Telefon+"</td>"+
       "<td>"+data.data[i].Adresi+"</td> "+
       "</tr>";
     $("#example").append(satir);
   }
    $("#example").DataTable();
   
   }).catch((error) => {
   
 
   });