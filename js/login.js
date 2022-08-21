// step-1 : add click event handler with the submit button 
document.getElementById('btn-submit').addEventListener('click', function () {


    // step-2 : get the email addtress inside the email input feild
    // always remember to use .value to get the text from an input feild
    const emailFeild = document.getElementById('user-email');
    const email = emailFeild.value;



    // step-3: get password
    // 3.a :set is on the html element
    // 3.b : get the element
    // 3.c : get the value from the elemnet 
    const passwordFeild = document.getElementById('user-password');
    const password = passwordFeild.value;

    // Danger : Do not verify the email and password on the client side 
    // step-4 : veify email and password

    if (email === 'sontan@bap.com' && password === 'secret') {
        console.log('valid user');
    }
    else {
        alert('Invalid user');
    }

})