$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

const name = document.getElementById('name') 
const email = document.getElementById('mail') 
const form = document.getElementById('form') 
const errorElement = document.getElementById('error') 
const messagesOne = document.getElementById('message');

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
        window.alert("Unesite ime")
    }
    if (email.value ==='') {
        messages.push('Email must be longer than 6 characters')
        window.alert('Unesite mail')
    }
    if (messagesOne.value === '') {
        messages.push('Poruka je kraca od 10 karaktera')
        window.alert('Unesite poruku')
    }
    if (messages.length > 0) {
        e.preventDefault() 
        
    }
})


// function validacija() { 
//     var name = document.forms["form"]["name"]; 
//     var email = document.forms["form"]["mail"]; 
//     var address = document.forms["form"]["message"]; 

//     if (name.value == "") { 
//         window.alert("Molimo Vas unesite svoje ime."); 
//         name.focus(); 
//         return false; 
//     } 


//     if (email.value == "") { 
//         window.alert( 
//           "Molimo Vas unesite e-mail."); 
//         email.focus(); 
//         return false; 
//     } 
//     if (message.value == "") { 
//         window.alert( 
//           "Molimo Vas unesite poruku."); 
//         message.focus(); 
//         return false; 
//     }

//     window.alert("Uspesno ste poslali poruku!");  
//     $("#form").submit(function(e) {
//         e.preventDefault();
//     });
// return true;
// } 