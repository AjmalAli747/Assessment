const form = document.getElementById("form");

const submitForm = (e) => {
  e.preventDefault();

  // input Function
  inputFunction();
};

form.addEventListener("submit", submitForm);

function inputFunction(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message").value;
    const country = document.getElementById("country").value;

    if(name == ""){
        swal("Please Enter Your Name");
    }else if(email == ""){
        swal("Please Enter Your Email");
    }else if(password == ""){
        swal("Please Enter Your Password");
    }else if(message == ""){
        swal("Please Enter Your Message");
    }else{
        swal("Congratulations!", "You Form is Submited", "success");

        console.log(`Name : ${name} Email : ${email} Password : ${password} Message : ${message} Country : ${country}`);

    }

}


function countryApi(){
    const country = document.getElementById("country");
    const countryAPi = ["India", "Nepal", "Afghanistan", "Albania", "AfghAlgeriaanistan", "Aland Islands", "Andorra", "Antarctica", "Armenia", "Argentina", "USA", "Dominica", "Falkland Islands", "Fiji", "Finland", "France", "Germany", "Greece", "Ivory Coas", "Japan" ,"China"];

    let countryName;
    for(let i = 0; i < countryAPi.length; i++){
        countryName += `<option>${countryAPi[i]}</option>`
    }

    country.innerHTML = countryName;
}

countryApi();
