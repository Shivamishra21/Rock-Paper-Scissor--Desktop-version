// 1- paper
// 2-scissor 
// 3- rock 




$("img").click(function(){
    var randomNo = Math.floor(Math.random()*3) +1;
    var id = $(this).attr("id");
    console.log(randomNo)
//  /  alert("Image ID is: " + $(this).attr("id"));
   if (id === "scissor"){
       if (randomNo == 1){
       document.getElementById("hidden").innerHTML = "Yayy!! you Won🎊🎉🎉";
        }
        if(randomNo === 2)
        document.getElementById("hidden").innerHTML = "Tie😐😐";
        if (randomNo === 3)
        document.getElementById("hidden").innerHTML = "Oh no!! You Lost😕😕";
    }
    if (id === "paper"){
        if (randomNo == 1){
        document.getElementById("hidden").innerHTML = "Tie😐😐";
         }
         if(randomNo === 2)
         document.getElementById("hidden").innerHTML = "Oh no!! You Lost😕😕";
         if (randomNo === 3)
         document.getElementById("hidden").innerHTML = "Yayy!! you Won🎊🎉🎉";
     }
     if (id === "rock"){
        if (randomNo == 1){
            document.getElementById("hidden").innerHTML = "Oh no!! You Lost😕😕";
         }
         if(randomNo === 2)
         document.getElementById("hidden").innerHTML = "Yayy!! you Won🎊🎉🎉";
         if (randomNo === 3)
         document.getElementById("hidden").innerHTML = "Tie😐😐";
     }
});
  