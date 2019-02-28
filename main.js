
 function validateForm() {
        let a=document.getElementById("inputName").value
        let b=document.getElementById("inputAddress").value
        let c=document.getElementById("inputEmail4").value
        let d=document.getElementById("inputPassword4").value
        let e=document.getElementById("inputcomment").value


        // var a=document.forms["form-control"]["inputName"].value;
        // var b=document.forms["form-control"]["inputAddress"].value;
        // var c=document.forms["form-control"]["inputEmail4"].value;
        // var d=document.forms["form-control"]["inputPassword4"].value;
        // var d=document.forms["form-control"]["inputcomment"].value;
        if (a==="" || b===""|| c===""|| d===""|| e==="")
        {
            alert("Please Fill All Required Field");
            return false;
        }
}


    

function checkPass() {
    let pass = document.getElementById('inputPassword4').value;
    let pattern =/^(?=.*\d){8,}$/;
    // let message = document.getElementById('inputPassword4');
    console.log(pass)
    let resulat = pattern.test(pass);
    console.log()
    console.log(resulat)
    if (resulat==false)
    alert ("Code érronné");
    else 
    alert("Votre demande est traitée!Nous sommes impatients de vous accueillir ")
}



function validateEmail(inputEmail4)
{
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
return emailPattern.test(inputEmail4);

}


function myResetFunction() {
    document.getElementById("Reset").reset();
  }
  