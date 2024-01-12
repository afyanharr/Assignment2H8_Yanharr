const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    let valname = document.getElementById("exampleInputNama").value;
    let valrole = document.getElementById("exampleInputRole").value;
    let valava = document.getElementById("exampleInputAvailability").value;
    let valusia = document.getElementById("exampleInputUsia").value;
    let vallokasi = document.getElementById("exampleInputLokasi").value;
    let valyears = document.getElementById("exampleInputYearsE").value;
    let valemail = document.getElementById("exampleInputEmail").value;
    document.querySelector('form').addEventListener('submit', function(event) { 
        event.preventDefault();  
        document.getElementById("nama-section1").innerHTML = valname;
        document.getElementById("role-section1").innerHTML = valrole;
        document.getElementById("availability-section1").innerHTML = valava;
        document.getElementById("usia-section1").innerHTML = valusia;
        document.getElementById("lokasi-section1").innerHTML = vallokasi;
        document.getElementById("yoe-section1").innerHTML = valyears;
        document.getElementById("email-section1").innerHTML = valemail;

        document.getElementById('form').style.display = 'none';
    }); 
})

