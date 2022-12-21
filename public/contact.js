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

const slidingFromBottom = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-bottom')
        }
    })
})

fadingIn.observe(document.querySelector('.contact-header'))
fadingIn.observe(document.querySelector('.contact-reach'))
slidingFromBottom.observe(document.querySelector('.one'))
slidingFromLeft.observe(document.querySelector('.two'))
slidingFromRight.observe(document.querySelector('.three'))
