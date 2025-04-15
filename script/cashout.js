/*
document.getElementById("cashout-btn").addEventListener("click",
function(event){
  event.preventDefault();
  const pin = document.getElementById("cashout-pin").value;
  const convertpin=parseInt(pin);
 const amounts=document.getElementById("cashout-amount").value;
 const convertamount=parseFloat(amounts);
 const mainbalance=document.getElementById("main-balance").innerText;
 const convertmainbalance=parseFloat(mainbalance);

 if(convertpin===1234){
    const sub=convertmainbalance-convertamount;
    document.getElementById("main-balance").innerText=sub;

 }
 else{
    alert("enter valid pin")
 }
})
 

*/
document.getElementById("cashout-btn").addEventListener("click",
   function(event){
     event.preventDefault();
 const AccountNum=document.getElementById('accountNumber').value;
 const amount=getInputvalueById("cashout-amount");
  const pin=getInputvalueById("cashout-pin");
  const mainamount=getInnerTextByID("main-balance")
  const selectbank = document.getElementById("allbank").value;

  if(amount>mainamount){
   alert("Invalid amuont");
   return;
  }

  if(AccountNum.length === 11){
   if(pin===1234){
      const sub=mainamount-amount;
      setInnerTextByIDandValue("main-balance",sub)

      const container = document.getElementById("transaction-container");

      const div = document.createElement("div");
      div.classList.add("bg-red-400")
     div.innerHTML =`
     <h1 class="text-yellow-300">CashOut Money from ${selectbank}</h1>
     <h3>Amount: ${amount}</h3>
     <p>Account Number: ${AccountNum}</p>
  
      `
      container.appendChild(div) 
   }
   else{
      alert("pin not valid")
   }
  }
  else{
       alert("account number is not valid")
  }

  
   })