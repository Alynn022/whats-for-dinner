var letsCookButton = document.querySelector('.lets-cook-button')
var cookPotImage = document.querySelector('.cook-pot-img')
var viewDishGenerated = document.querySelector('.dish-generated')
var itemGenerated = document.querySelector('.item-generated')
var dinnerForm = document.querySelector('.dinner-form')
var viewCooking = document.querySelector('.cooking')
//loginButtonHomePage
var loginButtonHP = document.querySelector('.go-to-login-button')
//loginButtonLoginPage
var loginButtonLP = document.querySelector('.login-button')
var selectADish = document.querySelector('.what-are-you-looking-for')
var cooking = document.querySelector('.cooking')
var viewLoginPage = document.querySelector('.login-bar')
var topNav = document.querySelector('.topNav')
var userNameInput = document.querySelector('.user-name')
var title = document.querySelector('.title')

dinnerForm.addEventListener('submit', (e) => {
  e.preventDefault()
  renderRandomDish()
})

loginButtonHP.addEventListener('click', goToLoginPage)
loginButtonLP.addEventListener('click', displayNameHP)

function getRandomIndex(array) {
  return Math.floor(Math.random() * (array.length))
}

function renderRandomDish() {
  var dishSelect = document.querySelector('input[name="options"]:checked').value
  randomSide = side[getRandomIndex(side)]
  randomMainDish = mainDish[getRandomIndex(mainDish)]
  randomDessert = dessert[getRandomIndex(dessert)]
  cookPotImage.classList.add('hidden')
  viewDishGenerated.classList.remove('hidden')

  if (dishSelect === 'side') {
    itemGenerated.innerText = randomSide +"!"
  }
  else if (dishSelect === 'mainDish') {
    itemGenerated.innerText = randomMainDish +"!"
  }
  else if (dishSelect === 'dessert') {
    itemGenerated.innerText = randomDessert +"!"
  } else {
  }
}

function goToLoginPage() {
  selectADish.classList.add('hidden')
  cooking.classList.add('hidden')
  viewLoginPage.classList.remove('hidden')
  loginButtonHP.classList.add('hidden')
}

function displayNameHP() {
  event.preventDefault()
  selectADish.classList.remove('hidden')
  cooking.classList.remove('hidden')
  viewLoginPage.classList.add('hidden')
  loginButtonHP.classList.add('hidden')
  title.classList.add('hidden')

  topNav.innerHTML += `<div>
    <h1 class="title">What's for Dinner, ${userNameInput.value}?</h1></div>`
}
