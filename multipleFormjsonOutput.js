// AMAZON interview question
// should output the JSON object as following

 /*
    {
      customer:{
         name: ,
         address:{
           city:,
           state:
         }
      },
      cc:
    }
 */
 
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <form id="customer-checkout">
    <input type="text" name="customer.name" />
  </form>
  <form id="payment-checkout">
    <input type="text" name="customer.name" />
    <input type="text" name="customer.address.city" />
    <input type="text" name="customer.cc" />
  </form>
  <script>
    function getCustomerInfo(id){
      let customerInfo = {
        customer: {
          name: "",
          address:{
            city: "",
            state: ""
          }
        },
        cc:""
      }
      let formElmts = document.getElementById(id).elements;
      if(id == "customer-checkout"){
        customerInfo.customer.name = formElmts[0].name;
        return customerInfo;
      } else if(id == "payment-checkout") {
        customerInfo.customer.name = formElmts[0].name;
        customerInfo.customer.address.city = formElmts[1].name;
        customerInfo.cc = formElmts[2].name;
        return customerInfo;
      }
    }
    var customerObj = getCustomerInfo(id="payment-checkout");
    console.log(customerObj);
  </script>
</body>
</html>

----------------------------------------------------------------------------------------------------------------
using CSS combinators and pseudo classes approach:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <form id="customer-checkout">
    <input type="text" name="customer.name" />
  </form>
  <form id="payment-checkout">
    <input type="text" name="customer.name" />
    <input type="text" name="customer.address.city" />
    <input type="text" name="customer.cc" />
  </form>
  <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
  <script>
    function getCustomerInfo(id){
      let customerInfo = {
        customer: {
          name: "",
          address:{
            city: "",
            state: ""
          }
        },
        cc:""
      }
      if(id == "customer-checkout"){
        customerInfo.customer.name = $("#"+id+" input").attr("name");
        return customerInfo;
      } else if(id == "payment-checkout") {
        customerInfo.customer.name = $("#"+id+" :first-child").attr("name");
        customerInfo.customer.address.city =  $("#"+id+" :first-child~input").attr("name");
        customerInfo.cc =  $("#"+id+" :last-child").attr("name");
        return customerInfo;
      }
    }
    var customerObj = getCustomerInfo(id="payment-checkout");
    console.log(customerObj);
  </script>
</body>
</html>
