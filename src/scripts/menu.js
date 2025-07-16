export default function createMenuTab() {
  const menuDiv = document.createElement("div")
  menuDiv.classList.add("tab", "menu")

  const foods = [
    {
      image: "",
      name: "Pizza",
      description: "Classic Margherita",
      price: "$10",
    },
    {
      image: "",
      name: "Burger",
      description: "Beef with cheddar",
      price: "$8",
    },
    { image: "", name: "Pasta", description: "Creamy Carbonara", price: "$12" },
  ]

  foods.forEach((item) => {
    const card = document.createElement("div")
    card.classList.add("food-card")

    const foodPar = document.createElement("div")
    foodPar.classList.add("food-des")

    const image = document.createElement("img")
    image.src = "img.jpg"

    const title = document.createElement("h3")
    title.textContent = item.name

    const desc = document.createElement("p")
    desc.textContent = item.description

    const price = document.createElement("span")
    price.textContent = item.price

    card.appendChild(image)
    foodPar.appendChild(title)
    foodPar.appendChild(desc)
    foodPar.appendChild(price)
    card.appendChild(foodPar)
    menuDiv.appendChild(card)
  })

  return menuDiv
}
