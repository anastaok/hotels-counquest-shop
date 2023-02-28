function addChangeHandler(node) {
  return (event) => node.classList.toggle('open')
}

export function burgerMenu() {
  const burgerMenus = document.querySelectorAll('label.burger-menu')

  for (const menu of burgerMenus) {
    const dataValue = menu.getAttribute('data-id-list')
    const list = document.querySelector(`ul${dataValue}`)

    list.classList.add('burger-menu__list')

    const changeHandler = addChangeHandler(list)

    menu.addEventListener('change', changeHandler)
  }
}
