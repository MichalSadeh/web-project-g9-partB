function change_images(){
    const bigImage = document.getElementById("bigImage");
    const leftImage = document.getElementById("leftImage");
    const centerImage = document.getElementById("centerImage");
    const rightImage = document.getElementById("rightImage");
    let num = 0;
    setInterval(()=>{
        num = (num + 1) % 10
        bigImage.src = `images/${num}.jpeg`
        leftImage.src = `images/${num+1}.jpeg`
        centerImage.src = `images/${num+2}.jpeg`
        rightImage.src = `images/${num+3}.jpeg`
        if (num == 8){
        num=0}
    },3000)
}

function validateLogInSingUpForm() {
    const uemail = document.getElementById("email");
    const mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

    if (!mailformat.test(uemail.value)) {
        alert("Please enter a valid email address!");
        uemail.focus();
        return false;
    }

    const upassword = document.getElementById("password");

    if (upassword.value.length < 6 || upassword.value.length > 12) {
        alert("Password must include btween 6 to 12 characters.");
        upassword.focus();
        return false;
    }
    alert("Received");
    return true;
}


function validateContactForm() {
    const uemail = document.getElementById("email");
    const mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

    if (!mailformat.test(uemail.value)) {
        alert("Please enter a valid email address!");
        uemail.focus();
        return false;
    }
    const uphone = document.getElementById("phone");
    const numbers = /^[0-9]{10}$/;

    if(!numbers.test(uphone.value)) {
        alert("Phone number must include 10 digits!");
        uphone.focus();
        return false
    }
    alert("Received");
    return true;
}


function toggle(event) {
    const toggleEl = event.currentTarget;
    console.log(toggleEl)
    const descriptionEl = toggleEl.parentNode.getElementsByClassName("description")[0];

    if (descriptionEl.classList.contains("collapsed")) {
    console.log("collapsed")
        descriptionEl.classList.remove("collapsed");
        toggleEl.innerText = "הסתר";
    } else {
    console.log("not collapsed")
        descriptionEl.classList.add("collapsed");
        toggleEl.innerText = "קרא עוד";
    }
}

function toggle2(item){
		item.classList.toggle("activate");
			let panel=item.nextElementSibling;
			if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
			return false;
}