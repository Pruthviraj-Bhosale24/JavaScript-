// var a=1;

// while(a<=10){
//     console.log(a);
//     a++;
    
// }

// var b=10;
// while(b>=1)
// {
//     console.log(b);
//     b--;
    
// }

var c=1
var sum=0;
while(c<=10){
    sum=c+sum;
    c++
    
}
console.log(sum);






<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Check Employee Identity</h1>
    <input type="text" id="EmpNamer" placeholder="Enter Employee Name:">
    <br><br>
    <input type="number" id="empId" placeholder="Enter Employee ID">
    <br><br>
    <input type="time" id="time" placeholder="Enter Time of Checking">
    <br><br>
    <button onclick="getData()">Cheking</button>
    <h1 id="msg"></h1>



    <script>

        var E_name = "pruthvi";
        var E_Id = "2428";
        function getData()
        {
            var a=document.getElementById("EmpName");
            var b=document.getElementById("EmpId");
            var msg=document.getElementById("msg");
         

             if(E_name ==a.value && E_Id==b.value){

                console.log("Login Successful!!"+"Welcome"+a.value);
                
               
            }
            else{
                console.log("Invalid username or Password!! Try Again!");
                
               
            }
           
        }
    </script>


</body>
</html>