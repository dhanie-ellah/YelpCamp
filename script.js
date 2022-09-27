const hamburgerMenu = document.querySelectorAll(".menu")
const links = document.querySelectorAll(".links")
const close = document.querySelectorAll(".close")

hamburgerMenu.forEach(hamburger => {
     hamburger.addEventListener('click', () => {
          hamburger.style.display = 'none'
          links.forEach(link => {
               if (link.style.display = 'none') {
                    link.style.display = 'block'
               }
          })
          close.forEach(closeBtn => {
               closeBtn.style.display = 'block'
          })
     })
})

close.forEach(closeBtn => {
     closeBtn.addEventListener('click', () => {
          closeBtn.style.display = 'none'
          links.forEach(link => {
               if (link.style.display = 'block') {
                    link.style.display = 'none'
               }
          })
          hamburgerMenu.forEach(hamburger => {
               hamburger.style.display = 'block'
          })
     })
})

