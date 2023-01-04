if (window.innerWidth > 600) {
const fadingIn = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fading-animation')
        }
    })
})

const slidingFromLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-left')
        }
    })
})

const slidingFromRight = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-right')
        }
    })
})

fadingIn.observe(document.querySelector('.about-headline'))
slidingFromRight.observe(document.querySelector('.one'))
slidingFromLeft.observe(document.querySelector('.two'))
slidingFromRight.observe(document.querySelector('.three'))
slidingFromLeft.observe(document.querySelector('.four'))
} else {

}