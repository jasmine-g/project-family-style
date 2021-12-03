/* to hide and show merch images on toggle of button */
var x = 0

 function show(){
    if(x%2 == 0) /*so that it only shows on even clicks*/{
        document.getElementById('sneakpeak')
        .style.display = "flex";

          
      } else {
    document.getElementById('sneakpeak')
    .style.display = "none"; }

    x++;
};

/* to show thank you message after user submit email to be updated about game updates*/ 
let btnSubmit = document.getElementsByClassName('btnSubmit');
let msg = " ";

      btnSubmit[0].addEventListener('click', function(e){

        if(document.getElementById('email').checkValidity() &&document.getElementById('email').value != ""){
          e.preventDefault();
          msg = 'Thank you for your support!';
          document.getElementById('ty').innerHTML = msg;
        }
        
      });

      
