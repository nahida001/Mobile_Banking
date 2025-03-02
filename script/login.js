document.getElementById('login-btn').addEventListener('click', function(event){
  event.preventDefault() ;
 const AccountNum=document.getElementById('accountNumber').value;
 const pins=document.getElementById('pin').value;
 const convertPins=parseInt(pins);
if(AccountNum.length === 11){
    if(convertPins===1234){
        window.location.href = "./main.html";
    }else{
        alert('your pin is not correct')
    }
}else{
    alert('Need a valid Number')
}
})