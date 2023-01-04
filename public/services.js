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

fadingIn.observe(document.querySelector('.services-top'))
slidingFromLeft.observe(document.querySelector('.one'))
slidingFromRight.observe(document.querySelector('.two'))
slidingFromLeft.observe(document.querySelector('.three'))
slidingFromRight.observe(document.querySelector('.four'))
slidingFromLeft.observe(document.querySelector('.five'))
slidingFromRight.observe(document.querySelector('.six'))
}