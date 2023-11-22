var start = new Date().getTime();  
 //gives starting time when its loaded //getTime() returns the number of milliseconds //Date.now() returns the number of milliseconds since

 // RANDOM COLOR FUNC ///////////

function randomcolor(){
var letter = '123456789ABCDEF';
var COLOR = '#';
for(var i=0;i<6;i++){
  COLOR=COLOR+letter [Math.floor(Math.random() * 16)]
}
return COLOR;

}

 //               RANDOM SHAPE FUNC //////////////
 function move(){
    var shape = document.getElementById("shape");
          // Generate random values for height, width, and top position
      var randomHeight = Math.floor(Math.random() * 400) + 100; // Random height between 100 and 300
      var randomWidth = Math.floor(Math.random() * 400) + 100;  // Random width between 50 and 300
      var randomTop = Math.floor(Math.random() * 900); + 600;
      var randomleft = Math.floor(Math.random() * 900); + 600;
      // Apply the random values to the shape
      shape.style.height = randomHeight + "px";
      shape.style.width = randomWidth + "px";
      shape.style.top = randomTop + "px";
      shape.style.left = randomleft + "px";
            
                                    document.getElementById("shape").style.display="block"; // to display shape again 
                                    document.getElementById("shape").style.backgroundColor=randomcolor(); // to change bgcolor of shape
                                    
                                     start = new Date().getTime(); //timer starts
}
             
move(); //call


     document.getElementById("shape").onclick = function(){

    document.getElementById("shape").style.display= "none";    //when you click on shape it will be vanished
    var end=new Date().getTime(); //the time when user clicked is noted down
    var timetakenbyuser= (end-start)/1000; // timetakenbyuser will get it by start time sub with end time // outputs in millisec so divide by 1000 gives you sec coz 1 sec =1000millisec
    document.getElementById("P1").innerHTML=timetakenbyuser + " " +"Seconds";
 
    move(); // calling func

}

