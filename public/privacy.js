if (window.innerWidth > 600) {
    const fadingIn = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fading-animation')
        }
    })
})

fadingIn.observe(document.querySelector('.privacy-heading'))
}