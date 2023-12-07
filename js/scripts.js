/* ---------------
  Navigation
 ---------------- */

var mainNav = document.querySelector("#mainNav");
var burgerBtn = document.querySelector("#burger-container button")

// this can only be true or false known as a boolean
var canYouSeeMainNav = false;

function showNav(){
    // console.log("button clicked");
    if(canYouSeeMainNav === false){
        console.log("show menu");
        // this will add the class of showMainNav to the id mainNav
        mainNav.classList.add("showMainNav");
        canYouSeeMainNav = true;
    }else{
        console.log("hide menu");
         // this will remove the class of showMainNav to the id mainNav
        mainNav.classList.remove("showMainNav");
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
    signInContainer.classList.add("show-signIn-container")
    // hide the navigation on close
    mainNav.classList.remove("showMainNav");
 }

 function hideSignInModal(){
    signInContainer.classList.remove("show-signIn-container")
    
 }

 signInbtn.addEventListener("click", showSignInModal);
 closeSignInModalBtn.addEventListener("click", hideSignInModal);
