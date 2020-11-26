
 
 function validation(callb){
    
    callb();
         
}
   
function disp(){
    var usn = document.getElementById("usn").value;
    var pwd = document.getElementById("pwd").value;
    var usnerr = document.getElementById("usnerr");
    var pwderr = document.getElementById("pwderr");

    if (usn === "admin" && pwd==="12345" ) {
        
        usnerr.innerHTML = "";
        pwderr.innerHTML = "";
        return true;   
    }
       

    if (usn !== "admin" && pwd !=="12345" ){
        usnerr.innerHTML = "** Incorrrect Username";
        pwderr.innerHTML = "** Incorrrect Password";
        return false;
    }
    
    }





// creating an xhr obhect
var xhttp = new XMLHttpRequest();
// event listner
xhttp.onreadystatechange = function(){
    // condition
    if(this.readyState==4 &&this.status==200){

        var response= JSON.parse(this.responseText);
       
        

        var output = "";
        for(var i=0;i<response.length;i++){
        output += '<input type="checkbox" id="mycheck"  onclick="promise()">'+ response[i].title +'<br><br>';
                                                          }
                                          
        
           document.getElementById("demo").innerHTML = output;
           
    }
    
    }
        var check = document.getElementById("mycheck");
        var checked=0;

        let promise = new Promise(function(res,rej){
            
            for(var i=0;i<check.length;i++){
                if(check[i].checked){
                    checked = checked+1;
                    
                }
            }

            if(checked===5){
                res();
               }
            if(checked!=5){
                rej();
            }
                          
                 promise.then(alert("5 tasks are sucessfully completed!!!")).catch(promise);
            });
            

    
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();


             

