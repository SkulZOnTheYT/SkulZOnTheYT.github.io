function changeText() {
    alert('Okay, Thankyou'); //alert
    let t1= document.getElementById("down"); //ubah teks
    t1.textContent = "Lets start scroll :v";
    let button = document.getElementById("button"); // sembunyikan button
    button.style.display = "none";
}

function processFormData(event) {
    event.preventDefault(); 
    alert('oke, saya terima');
    // Access the form
    let form = document.getElementById('myForm');
    //Access the elements by name and get values
    const email = form.elements.email.value;
    const pass = form.elements.pass.value;
    const tel = form.elements.tel.value;
    
    insertData(email, pass, tel);

    document.getElementById('email').value = '';
    document.getElementById('pass').value = '';
    document.getElementById('tel').value = '';
};

function insertData(email, pass, tel) {
    // Insert data into the table
    let table = document.getElementById('dataTable');
    let newRow = table.insertRow();
    
    let emailCell = newRow.insertCell(0);
    let passCell = newRow.insertCell(1);
    let telCell = newRow.insertCell(2);
    
    emailCell.innerHTML = email;
    passCell.innerHTML = pass;
    telCell.innerHTML = tel;
}