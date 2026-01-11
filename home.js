// some functionality for reusing
function getInputValueNumber(id) {
    const TogetInput = document.getElementById(id);
    const TogetInputValue = TogetInput.value;
    const TogetInputValueNumber = parseInt(TogetInputValue);
    return TogetInputValueNumber;

}


const TransctionData = [];

//  some functionality for just value 

function getInputValue(id) {
    const TogetInput = document.getElementById(id);
    const TogetInputValue = TogetInput.value;
    return TogetInputValue;


}


// function for innertext 


function getInnertextNumber(id) {
    const TogetInput = document.getElementById(id);
    const TogetInputText = TogetInput.innerText;
    const TogetInputTextNumber = parseInt(TogetInputText);
    return TogetInputTextNumber;

}


//function for set value

function setvalue(value) {
    const setvalue = document.getElementById("AvailableBalanceId");
    setvalue.innerText = value;
}



// 



// add money functionality
document.getElementById("Add-money-btn").addEventListener('click', function (e) {
    e.preventDefault();
    // const bank =getInputValueNumber("Bank");
    const AccountNumber = getInputValue("account number");
    const AddMoney = getInputValueNumber('Add-amount');
    const PinNumber = getInputValueNumber('Add-pin');

    if (AccountNumber.length < 11) {
        alert("please provide valid account Number");
        return;
    }
    if (AddMoney <= 0) {
        alert("please positive amount");
        return;
    }

    const AvailableBalance = getInnertextNumber('AvailableBalanceId');
    const newAvailableBalance = (AddMoney + AvailableBalance);

    setvalue(newAvailableBalance);


    // to make object 
    const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    }
    TransctionData.push(data);




})

// cashout functionality   




document.getElementById('withdraw-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const agentnumber = getInputValue('agent-number');
    const PinNumber = getInputValueNumber('cashOut-pin');
    const amount = getInputValueNumber('withdraw-amount');



    if (agentnumber.length >= 11 && PinNumber === 1234) {
        const AvailableBalance = getInnertextNumber('AvailableBalanceId');
        if (amount <= 0 || amount > AvailableBalance) {

            alert("please provided exact ammount");
            return;
        }

        const newAvailableBalance = (AvailableBalance - amount);


        setvalue(newAvailableBalance);



        const data = {
            name: "Cash Out",
            date: new Date().toLocaleTimeString()
        }
        TransctionData.push(data);




    }

    else {
        alert("please provide valid agent Number and pin number");
        return;
    }
})



// toggeling freatures for button and it is reuseable code

function handlingBtn(id) {

    // form btn remove add background color and border 
    const forms_btn = document.getElementsByClassName('form-btn');
    for (const btn of forms_btn) {
        btn.classList.remove('border-[#0874f2]', "bg-[#0874f20d]");
        btn.classList.add('border-gray-400');
    }

    document.getElementById(id).classList.remove('border-gray-400');
    document.getElementById(id).classList.add('border-[#0874f2]', "bg-[#0874f20d]");


}







// handling freatures for reuse 

function handlingTraggle(id) {

    const forms = document.getElementsByClassName('form-section');
    for (const form of forms) {
        form.style.display = 'none'
    }
    document.getElementById(id).style.display = 'block';
}

// transcio



document.getElementById('addMoneybtn').addEventListener('click', function () {

    handlingTraggle('addMoneyIdParent');
    handlingBtn('addMoneybtn');

})


document.getElementById('cashOutbtn').addEventListener('click', function () {
    handlingTraggle('cashOutIdParent')
    handlingBtn('cashOutbtn');
})

// tranfer money js 

document.getElementById("tranfer-moneybtn").addEventListener('click', function () {
    handlingTraggle('transferMoneyParent');
    handlingBtn('tranfer-moneybtn');

})

// get bonus
document.getElementById("getBonusIdBtn").addEventListener('click', function () {
    handlingTraggle('getBonusParent');
    handlingBtn('getBonusIdBtn');

})

// pay  Bill

document.getElementById("PayBillBtn").addEventListener('click', function () {
    handlingTraggle('PayBillParent');
    handlingBtn('PayBillBtn');

})


// transctions concept

document.getElementById("transctionsBtn").addEventListener('click', function () {
    handlingTraggle('TransactionsParent');
    handlingBtn('transctionsBtn');




    const transactionContainerV = document.getElementById('transactionContainer');
    transactionContainerV.innerText = ''
    for (const data of TransctionData) {

        const div = document.createElement('div');
        div.innerHTML = `
        <div  class="bg-white rounded-xl and p-3 flex justify between items-center">
                    <div  class="flex items-center">
                        <div class="p-3 rounded-full  bg-[#f4f5f7] flex justify-center items-center">
                            <img src="./Payoo-MFS-Resources/assets/wallet1.png" class="mx-auto " alt="">
                        </div>
                        <div class="ml-3">
                            <h1>${data.name}</h1>
                            <p>${data.date}</p>

                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>






        `
        transactionContainerV.appendChild(div);


    }

})



