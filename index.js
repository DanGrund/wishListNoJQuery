const submitButton = document.querySelector('.submit-wish')
const wishInput = document.querySelector('.wish-input')
const wishList = document.querySelector('.wish-list')
let wishArray = []

document.addEventListener("DOMContentLoaded", (e) => {
  loadPage()
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  const newWish = wishInput.value
  storeWish(newWish)
  renderWishes(wishArray)
  clearInput()
})

wishList.addEventListener('click', (e) => {
  if (e.target.className === "remove-button"){
    const wishText = (e.target.parentNode.firstChild.data)
    deleteCard(wishText)
    renderWishes(wishArray)
  }
})

const appendItem = (newWish) => {
  const inputValue = wishInput.value
  const listItem = document.createElement('p')
  listItem.setAttribute('contenteditable', 'true')
  listItem.innerHTML = newWish + `<button class="remove-button">remove</button>`
  wishList.appendChild(listItem)
}

const clearInput = () => {
  wishInput.value = ""
}

const deleteCard = (text) => {
  for (let i = 0; i < wishArray.length; i++) {
      const wish = wishArray[i]
      if (text == wish) {
        wishArray.splice(i, 1)
      }
      localStorage.setItem("wishArray",JSON.stringify(wishArray))
    }
}

const loadPage = () => {
  const holdingValue = JSON.parse(localStorage.getItem("wishArray"));
  if (holdingValue){
    wishArray = holdingValue;
    renderWishes(wishArray);
  }
}

const storeWish = (wish) => {
  wishArray.push(wish);
  localStorage.setItem("wishArray", JSON.stringify(wishArray));
}

const renderWishes = (newArray) => {
  if (newArray) wishArray = newArray;
  let wishList = document.querySelector('.wish-list');
  while (wishList.firstChild) wishList.removeChild(wishList.firstChild);
  for (let i = 0; i < wishArray.length; i++) {
  appendItem(wishArray[i]);
  }
}
