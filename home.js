const $ = document.querySelector.bind(document),
$$ = document.querySelectorAll.bind(document)

const userInput = $('#user'),
amountInput = $('#amount'),
sendBtn = $('.send-btn button')

var money = parseFloat(($('.money').textContent));

const checkLengthEmpty = (input, message) =>{
    if(input.value.trim() === '')
        alert(message)
}

/* DisplayNotification */

sendBtn.onclick = () =>{
    const userInputValue = userInput.value.trim(),
    amountInputValue = amountInput.value.trim()

   checkLengthEmpty(userInput, "Vui lòng nhập thông tin user")
   checkLengthEmpty(amountInput, "Vui lòng nhập amount ")

   if(amountInputValue && userInputValue){
    money = (money - parseFloat(amountInputValue)).toFixed(3)
    if(money < 0)
    alert("Số dư trong tài khoản của bạn không đủ để gửi")
    else if(money > 0){
        document.querySelector('#box-notification').classList.remove('hide') 
        $('.userName').textContent = userInputValue
        $('.amount').textContent = amountInputValue
        $('.money').textContent = money
        userInput.value = ''
        amountInput.value = ''
    }
   }


}

/* CloseNotification */

const closeNotifiCation = (element) =>{
    element.onclick = () =>{
        document.querySelector('#box-notification').classList.add('hide')
    }
}

const returnBtn = $('.return-btn'),
closeIcon = $('.close-btn')

returnBtn.onclick = () => closeNotifiCation(returnBtn)
closeIcon.onclick = () => closeNotifiCation(closeIcon)