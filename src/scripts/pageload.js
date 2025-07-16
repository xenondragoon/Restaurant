
import HomeImage from "../images/home.jpg";

export default function createHomeTab() {
  const homeDiv = document.createElement("div")
  homeDiv.classList.add("tab")

  const para = document.createElement("div")
  para.classList.add("par")


  const title = document.createElement("h2")
  title.textContent = "Welcome to Delicious Bites!"

  const description = document.createElement("p")
  description.textContent = "We serve fresh and tasty food made with love."

  const image = document.createElement("img")
  image.classList.add("home-image")
  image.src = HomeImage
  image.alt = "Delicious Food"
  image.style.maxWidth = "500px"
  image.style.width = "100%"

  para.appendChild(title)
  para.appendChild(description)
  homeDiv.appendChild(para); 
  homeDiv.appendChild(image)

  return homeDiv
}
