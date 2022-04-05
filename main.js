function giveError(id,error){
    let element = document.getElementById(id);
    element.getElementsByClassName("error")[0].innerText = error;
}

function clearError(id){
    clrError = document.getElementById(id);
    clrError.innerText = '';

    

    
}

function nameValidation(){
    let myVerification = true;
    clearError("nameError");
    //perform validation for name and if validation fails, set the value of myVerification to false
    let fstName = document.forms["myForm"]["fName"].value;
    console.log(typeof(fstName))
    let inv = ['!','@','#','$','^','&','*','(',')','_','-','=','+','{','}','[',']',"'",';',':',',','<','/','?','1','2','3','4','5','6','7','7','9','0']
    let invalidChar = true;

    for (let i =0;i<inv.length;i++){
        if ((fstName.includes(inv[i]))){
            invalidChar = true;
            break;
        }
        else{
            invalidChar = false;
        }
    }
    if (fstName.length<3 || invalidChar==true ||fstName[0]==" " || fstName.endsWith(' ')|| fstName.includes("  ")){
        giveError("name","Invalid  Name");
        myVerification = false;
    }
    
    fstName.split(' ').length==3 ? (myVerification = true) : (myVerification = false,  giveError("name","Invalid  Name"))

    return myVerification;    
}

// function for validation of email 
function emailValidation(){
    let myVerification = true;
    clearError("mailError");
    let mailId = document.forms["myForm"]["mailId"].value;
    if (mailId.includes("@") & (mailId.includes("."))){
        let fstSplit = mailId.split("@");
        let userName = fstSplit[0]  //kapilsukhdhane23
        let secondSplit = fstSplit[1].split(".");
        let domain = secondSplit[0]; //gmail
        let extinction = secondSplit[1]//com
        // console.log(userName)
        // console.log(domain)
        // console.log(extinction)

        if (!isNumeric(userName) & isAlpha(userName[0])){
            myVerification = true;
        }else{
            document.getElementsByClassName("error")[1].setAttribute("style","color:red;")
            giveError("Email","Please enter a valid Email id")
            myVerification = false
            
        }

        if (!isNumeric(domain) & isAlpha(domain[0])){
            myVerification = true
        }
        else{
            document.getElementsByClassName("error")[1].setAttribute("style","color:red;")
            giveError("Email","Please enter a valid Email id")
            myVerification = false
        }

        if (isAlpha(extinction)){
            myVerification = true
        }
        else{
            document.getElementsByClassName("error")[1].setAttribute("style","color:red;")
            giveError("Email","Please enter a valid Email id")
            myVerification = false
        }



    }else{
        document.getElementsByClassName("error")[1].setAttribute("style","color:red;")
        giveError("Email","Please enter a valid Email id")
        myVerification = false
        console.log("hehe")
    }
    return myVerification;
}


function formatPhoneNumber(value){
    if (!value) return value;

    let phoneNumber = value.replace(/[^\d]/g, '');
    let phoneNumberLength = phoneNumber.length;
    if(phoneNumberLength < 4){ 
        return phoneNumber;
    }

    if (phoneNumberLength < 7){
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(3,6)}-${phoneNumber.slice(6, 9)}`;
}

function phoneNumberFormatter() {
    let inputField = document.getElementById('phone-number');
    let formattedInputValue = formatPhoneNumber(inputField.value);
    inputField.value = formattedInputValue;
}

function operatorValidation(){
    clearError("warning");
    // to validate weather first three letters entered by user belogs to given operator's range or not
    let myVerification = true;
    let inputField = document.getElementById('phone-number').value;
    console.log(inputField.slice(1,4));
    // to set operators logo
    if ((inputField.slice(1,4)>620)&(inputField.slice(1,4)<800)){
       let img = document.getElementById("logo");
       img.setAttribute("src",("logo/jio.webp"))
       let warning = document.getElementById("warning");
        warning.innerText = "";
    }
    else if ((inputField.slice(1,4)>800)&(inputField.slice(1,4)<921)){
        let img = document.getElementById("logo");
        img.setAttribute("src",("logo/idea.jpg"));
        let warning = document.getElementById("warning");
        warning.innerText = "";
    }
    else if((inputField.slice(1,4)>920)&(inputField.slice(1,4)<1000)){
        let img = document.getElementById("logo");
        img.setAttribute("src",("logo/vodafone.png"));
        let warning = document.getElementById("warning");
        warning.innerText = "";
    }
    else{
        if((inputField.length>5)){
        
            let img = document.getElementById("logo");
            img.removeAttribute("src");
            let warning = document.getElementById("warning");
            warning.innerText = "*INVALID OPERATOR";
            myVerification = false;
        }

    }

    
    return myVerification;
}

function stateValidation(){
    // validation of state code i.e the next three numbers after oprator's code as per refrence of below object 
    let myVerification = true;
    let states ={
        0 : [28,",Andhra Pradesh"],
        1 : [056,",Arunachal Pradesh"],
        2 : [084,",Assam"],
        3 : [112,",Bihar"],
        4 : [140,",Chhattisghar"],
        5 : [168,",Goa"],
        6 : [196,",Gujrat"],
        7 : [224,",Haryana"],
        8 :[ 252,",Himachal Pradesh"],
        9 : [280,",Jarkhand"],
        10 : [308,",Karnataka"],
        11 :[ 336,",Kerala"],
        12 : [364,",Madhya Pradesh"],
        13 : [392,",Mhaharashtra"],
        14 : [420,",Manipur"],
        15 : [448,",Meghayala"],
        16 : [476,",Mizoram"],
        17 : [504,",Nagaland"],
        18 : [532,",Odisha"],
        19 : [560,",Punjab"],
        20 : [588,",Rajasthan"],
        21 : [616,",Sikkim"],
        22 : [644,",Tamil Nadu"],
        23 : [672,",Telangana"],
        24 : [700,",Tripura"],
        25 : [728,",Uttar Pradehsh"],
        26 : [756,",Uttarakhand"],
        27 : [784,",West Bengal"],
        28 : [812,",Andaman and Nicobar"],
        29 : [840,",Chandigarh"],
        30 : [868,",Dadra and Nagar Haveli"],
        31 : [869,",Delhi"],
        32 : [924,",Jammu And Kashmir"],
        33 : [952,",Ladalh"],
        34 : [980,",Lakshadweep"],
        35 : [999,",Puducherry"]

    }

    let inputField = document.getElementById('phone-number').value;
    // console.log(inputField.slice(6,9))
    let verif = true;
    let index = 0;
    // to check wether the number entered by user is valid state code or not, if yes it return true
    for ( let i =0; i<36;i++){
        if((inputField.slice(6,9)<=states[i][0])){
            verif = true;
            index = i;
            break;
        }
        else{
            verif = false;
        }

        // let verif = ((inputField.slice(6,9)<=states[i][0])) ? index=i : verif = false;
    }

    // if(verif==true){
    //     let state = document.getElementById('state');
    //     state.innerText = `${states[index][1]}`;
    //     state.setAttribute("style","color:white;")

    // }
    // else if ((verif==false)&(inputField.length>9)){
    //     let state = document.getElementById('state');
    //     state.innerText = "*INVALID STATE CODE"
    //     state.setAttribute("style","color:red;")
    //     myVerification = false;

    // }     

    let state = document.getElementById('state');
    verif ? (state.innerText = `${states[index][1]}`,state.setAttribute("style","color:white;")) : (state.innerText = "*INVALID STATE CODE", state.setAttribute("style","color:red;"), myVerification = false)
 


    return myVerification;
}


function settingLocalStorage(){
    let fstName = document.forms["myForm"]["fName"].value;
    let FirstName = fstName.split(' ')

    localStorage.setItem('name',FirstName[0]);
    console.log(FirstName);
    
    let inputField = document.getElementById('phone-number').value;
    localStorage.setItem('number',inputField);
    
}

// adding length condition to phone number so that user should not enter last four degits less than four
function phLen(){
    let myVerification = true;
    let inputField = document.getElementById('phone-number').value;
    if (inputField.length<14){
        let warning = document.getElementById("warning");
        warning.innerText = "*INVALID NUMBER";
        myVerification = false;
    }

    return myVerification;
}

function isNumeric(strg){
   let isNumber = true
    for (let i=0;i<strg.length;i++){
        if (Number(strg[i])!=strg[i]){
            isNumber = false;
            break;
        }else{
            isNumber = true;
        }
    }
    return isNumber
    
}


function isAlpha(strg){
   let isAlphabet = true
    for (let i=0;i<strg.length;i++){
        if (Number(strg[i])==strg[i]){
            isAlphabet = false ;
            break;
        }
        else{
            isAlphabet = true;
        }
    }
    return isAlphabet
}

