function handleEmailContract(event) {
    event.preventDefault()
    const email = event.target.email.value;
    const handleEmailContract = document.getElementById(success_Container);

    const para = document.createElement("p")
    para.innerText = "Thank You For Subscription";
    success_Container.appendChild(para);
    // console.log(success_Container);



}