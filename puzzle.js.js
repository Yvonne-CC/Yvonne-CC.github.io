document.write("");

function sayHello(){
 var response = prompt("What is your name?");
 alert("Hello " + response + ", welcome to my puzzle game!");
}
sayHello();
</body>
</html>
<input type="button" value="A" id="OK">
<script>
 var ok=document.getElementById("OK");
 ok.onclick=function(){
     alert("Congratulations, you got it right");
   };
</script>
