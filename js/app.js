const getElement = (selector) => {
  try {
  const element = document.querySelector(selector)

  
  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
} catch (error) { 
  console.error(error)
}
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')
// const btnBlock = getElement('.btn-block')

// if (btnBlock) {
// btnBlock.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log(e.type);
// })
// }

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
  if (window.innerWidth < 992 && links.classList.contains('show-links')) { 
    const page = getElement('.page')
    page.style.paddingTop = '2rem';
  } else { 
    const page = getElement('.page')
    page.style.paddingTop = '0';
  }
})



const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear
