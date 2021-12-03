
var x = 0

 function show(){
    if(x%2 == 0){
        document.getElementById('sneakpeak')
        .style.display = "flex";

          
      } else {
    document.getElementById('sneakpeak')
    .style.display = "none"; }

    x++;
};
    
let btnSubmit = document.getElementsByClassName('btnSubmit');
let msg = " ";

      btnSubmit[0].addEventListener('click', function(e){

        if(document.getElementById('email').checkValidity() &&document.getElementById('email').value != ""){
          e.preventDefault();
          msg = 'Thank you for your support!';
          document.getElementById('ty').innerHTML = msg;
        }
        
      });

      
