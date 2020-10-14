const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav__links')
    const navLinks = document.querySelectorAll('.nav__links li')
    const body = document.querySelector('.main')


    // Toggle Nav

    burger.addEventListener("click", () => {
        nav.classList.toggle('nav--active')

        // Animate Links

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.3s ease forwards ${index/8 +0.2}s`
            }
        })
        // Burger animation 

        burger.classList.toggle("toggle")

    })

    nav.addEventListener("click", () => {
        nav.classList.toggle(`nav--active`)
        // Animate Links

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade .3s ease forwards ${index/8 +0.2}s`
            }
        })
        // Burger animation 

        burger.classList.toggle("toggle")

    })

    body.addEventListener("click", () => {
        if (nav.classList.contains('nav--active')) {
            nav.classList.remove('nav--active')
        } else {
            return
        }

        // Animate Links

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade .3s ease forwards ${index/8 +0.2}s`
            }
        })
        // Burger animation 

        burger.classList.remove("toggle")

    })

}

navSlide()