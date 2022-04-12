import get from './getElement.js'
import { hideLoading } from './loading.js'
const displayDrinks = ({ drinks }) => {
  const section = get('.section-center')
  const title = get('.title')
  if (!drinks) {
    hideLoading()
    title.textContent = 'sorry, no drinks match your search'
    section.innerHTML = null
    return
  }
  const newDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrinkThumb: image, strDrink: name } = drink
      return ` <a href="drink.html">
        <article class="cocktail" data-id="${id}">
          <img src=${image} alt="cocktail-img" />
          <h3>${name}</h3>
        </article>
      </a> `
    })
    .join('')
  hideLoading()
  title.textContent = ''
  section.innerHTML = newDrinks
  return section
}

export default displayDrinks
