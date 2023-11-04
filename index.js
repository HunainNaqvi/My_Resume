function handleLogin() {
    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value

    if (username === 'Hunain' && password === 'Hunni111') {
        localStorage.setItem("authentication", true)
        window.location.href = "Hunain.html"
    }
    else {
        const errorBox = document.querySelector("#error")
        errorBox.classList.add("active")
    }
}