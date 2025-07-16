export default function createContactTab() {
  const contactDiv = document.createElement("div")
  contactDiv.classList.add("tab","contact")

  const title = document.createElement("h2")
  title.textContent = "Contact Us"

  const email = document.createElement("p")
  email.textContent = "Email: hello@deliciousbites.com"

  const phone = document.createElement("p")
  phone.textContent = "Phone: +123 456 7890"

  contactDiv.appendChild(title)
  contactDiv.appendChild(email)
  contactDiv.appendChild(phone)

  return contactDiv
}
