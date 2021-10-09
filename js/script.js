const burger = document.querySelector('.burger')
const nav = document.querySelector('.header_nav')

burger.addEventListener('click', () => {
  nav.classList.toggle('shown')
  burger.classList.toggle('cross')
})

new Splide('.splide', {
  type: 'loop',
  drag: 'free',
  perPage: 3,
  focus: 'center',
  autoplay: true,
  breakpoints: {
    1000: {
      perPage: 2
    },
    500: {
      perPage: 1
    },
  },
}).mount()

const arrow = document.querySelector('.arrow')
document.addEventListener('scroll', () => {
  const scroll = document.documentElement.scrollTop || document.body.scrollTop
  scroll > 200 ? arrow.classList.remove('out') : arrow.classList.add('out')
})
