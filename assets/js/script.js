const sendForm = document.getElementById("sendForm")

const sendMessage = (username, lastname, email, categories, message) => {
	let msn = `De: ${username} ${lastname} (${email})
	Asunto: ${categories}
	Mensaje:
	${message}`
	alert(msn)
}

sendForm.addEventListener("submit", (ev) => {
	ev.preventDefault()
	let username = document.getElementById("username").value
	let lastname = document.getElementById("lastname").value
	let email = document.getElementById("email").value
	let categories = document.getElementById("categories")
	let text = categories.options[categories.selectedIndex].text
	let message = document.getElementById("message").value

	sendMessage(username, lastname, email, text, message)
})