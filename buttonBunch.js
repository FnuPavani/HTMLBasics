// create 20 buttons from 1 to 20 and on clicking it alert the number

<!DOCTYPE html>
<html>
  <head>
    <style>
      .btn{
        height:30px;
        width:60px;
        border:1px solid #000;
        border-radius: 5px;
        background-color: lightblue;
      }
    </style>
  </head>
<body>
  <script>
    for(let i=1;i<=20;i++){
      var btn = document.createElement("BUTTON");
      btn.setAttribute('id',i);
      btn.setAttribute('class','btn');
      btn.innerHTML = i;
      btn.onclick = function(){
        alert(i);
      }
      document.body.appendChild(btn);
    }
  </script>
</body>
</html>
