const nameInput = document.getElementById('name');
const messageP = document.getElementById('message');
nameInput.onkeydup = (event) => {
    if(nameInput.value === '') {
        messageP.innerText = '';
    }
}

function helloWorld(){
    document.getElementById('message')
        .innerText = `Hello World, ${nameInput.value}!`;
}