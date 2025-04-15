/*
document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const account = document.getElementById("account-number").value;
    const amount=document.getElementById("amount").value;
    const convertamount=parseFloat(amount);
    const pin=document.getElementById("pin").value;
    const convertpin=parseInt(pin);
    
     const mainbalance=document.getElementById("main-balance").innerText;
     const convertmainbalance=parseInt(mainbalance);
     if(AccountNum.length === 11){
    if(convertpin === 1234){
         const sum = convertmainbalance + convertamount;
         document.getElementById("main-balance").innerText=sum;

         const container=document.getElementById("transaction-container")
           const p=document.createElement("p");
           p.innerText=`
           added ${amount} from ${account} account
       
           `
           container.appendChild(p)
    }
    else{
        alert("Enter valid pin")
    }
}
    else{
       alert("Enter Amount")
    }
});
*/
document.getElementById('add-money').addEventListener('click',function(event){
        event.preventDefault();

    const AccountNum=document.getElementById('accountNumber').value;
    const amount=getInputvalueById("amount");
    const pin=getInputvalueById("pin");
    const mainamount=getInnerTextByID("main-balance");
    
    const selectbank=document.getElementById("allbank").value;

    if(amount<0){
      alert("Invalid Amount")
      return;
    }

    if(AccountNum.length === 11){
        if(pin===1234){

            const sum =  mainamount+ amount;
          //  document.getElementById("main-balance").innerText=sum;
          setInnerTextByIDandValue("main-balance" ,sum);

            const container = document.getElementById("transaction-container");

              const div = document.createElement("div");
              div.classList.add("bg-red-400")
             div.innerHTML =`
             <h1 class="text-yellow-300">Added Money from ${selectbank}</h1>
             <h3>Amount: ${amount}</h3>
             <p>Account Number: ${AccountNum}</p>
          
              `
              container.appendChild(div) 
        }
            else{
                alert("Enter valid pin")
            }
        }
            else{
               alert("Enter Amount")
            }
    })