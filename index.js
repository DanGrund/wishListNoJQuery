var submitButton = document.querySelector('.submit-wish')
var wishInput = document.querySelector('.wish-input')
var wishList = document.querySelector('.wish-list')

submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  appendItem()
  clearInput()
})

wishList.addEventListener('click', (e) => {
  if (e.target.className === "remove-button"){
    deleteCard(e)
  }
})

var appendItem = function() {
  var inputValue = wishInput.value
  var listItem = document.createElement('p')
  listItem.innerHTML = inputValue + `<button class="remove-button">remove</button>`
  wishList.appendChild(listItem)
}

var clearInput = function() {
  wishInput.value = ""
}

var deleteCard = function(e) {
  ((e.target).parentNode).remove()
}
