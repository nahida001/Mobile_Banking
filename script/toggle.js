
/*

document.getElementById("add-money-box").addEventListener("click",
function(){
document.getElementById("cashout").style.display="none";
document.getElementById("addmoney").style.display="block"

})


document.getElementById("cashout-box").addEventListener("click",
    function(){
    document.getElementById("addmoney").style.display="none";
    document.getElementById("cashout").style.display="block";
    
    })
    */
   document.getElementById("cashout").style.display="none"
   document.getElementById("transaction-histroy").style.display="none"
   document.getElementById("add-money-box").addEventListener("click" ,
    function(){
    handleToggle("addmoney", "block");
    handleToggle("cashout" ,"none");
    handleToggle("transaction-histroy", "none")
    })

    document.getElementById("cashout-box").addEventListener("click" ,
        function(){
        handleToggle("addmoney", "none");
        handleToggle("cashout" ,"block");
        handleToggle("transaction-histroy", "none")
        })


    