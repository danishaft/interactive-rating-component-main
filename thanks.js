
let finalMsg = document.querySelector(".rating-msg");

function render() {
    let number = localStorage.getItem('value')
    finalMsg.textContent = `You selected ${number} out of 5`
}

render();