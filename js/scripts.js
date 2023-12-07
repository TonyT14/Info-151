/* ---------------
  Navigation
 ---------------- */

var mainNav = document.querySelector("#mainNav");
var burgerBtn = document.querySelector("#burger-container button");
var burgerBars = document.querySelector("#burger-bars");
var burgerX = document.querySelector("#burger-x");

// this can only be true or false known as a boolean
var canYouSeeMainNav = false;

function showNav(){
    // console.log("button clicked");
    if(canYouSeeMainNav === false){
        console.log("show menu");
        // this will add the class of showMainNav to the id mainNav
        mainNav.classList.add("showMainNav");
        canYouSeeMainNav = true;

        // hide burger bars
        burgerBars.classList.add("hide-burger-bars");

        // show burger x
        burgerX.classList.remove("hide-burger-x");

    }else{
        console.log("hide menu");
         // this will remove the class of showMainNav to the id mainNav
        mainNav.classList.remove("showMainNav");

        // show burger bars
        burgerBars.classList.remove("hide-burger-bars");

        // hide burger x
        burgerX.classList.add("hide-burger-x");

        canYouSeeMainNav = false;
    }

}

// add a event listener to the button
burgerBtn.addEventListener("click", showNav);


/* ---------------
   Sign In
 ---------------- */
 var signInbtn = document.querySelector("#sign-in-btn");
 var signInContainer = document.querySelector("#sign-in-container");
 var closeSignInModalBtn = document.querySelector("#close-sign-in-modal-btn");
 
 function showSignInModal() {
    // console.log("show modal now");
    signInContainer.classList.add("show-signIn-container");
    // hide the navigation on close
    mainNav.classList.remove("showMainNav");
 }

 function hideSignInModal() {
    signInContainer.classList.remove("show-signIn-container");
 }

 signInbtn.addEventListener("click", showSignInModal);
 closeSignInModalBtn.addEventListener("click", hideSignInModal);

 /* ---------------
   Sign Up
 ---------------- */
 var signUpbtn = document.querySelector("#sign-up-btn");
 var signUpContainer = document.querySelector("#sign-up-container");
 var closeSignUpModalBtn = document.querySelector("#close-sign-up-modal-btn");

 function showSignUpModal() {
    // console.log("show modal now");
    signUpContainer.classList.add("show-signUp-container");
    // hide the navigation on close
    mainNav.classList.remove("showMainNav");
 }

 function hideSignUpModal() {
    signUpContainer.classList.remove("show-signUp-container");
 }

 signUpbtn.addEventListener("click", showSignUpModal);
 closeSignUpModalBtn.addEventListener("click", hideSignUpModal);
