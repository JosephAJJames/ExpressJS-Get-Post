const form = document.getElementById("form")
let input = document.getElementById("input")
const url = 'localhost:3000/send';

form.addEventListener("submit", () => {
    const textData = input.value;
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: textData
    })
})