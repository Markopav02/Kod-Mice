console.log("JavaScript uspesno povezan");


let forma = document.getElementsByClassName("forma")[0];
console.log(forma);
forma.addEventListener("submit", checkData);
function checkData(){
    vrednost = document.querySelector("#izborJela1").value;
    if(window.confirm("Da li ste sigurni da želite da izaberete sledeće jelo : "+vrednost)){
        window.alert("Hvala što ste popunili anketu!");
    }
}


