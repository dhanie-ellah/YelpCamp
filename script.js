// HAMBURGER MENU
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

// SIGNIN/SIGNUP
const signupForm = document.getElementById('signup-form')
const signinForm = document.getElementById('signin-form')
const signupUsername = document.getElementById('signup-username')
const signinUsername = document.getElementById('signin-username')
const signupPassword = document.getElementById('signup-password')
const signinPassword = document.getElementById('signin-password')
const signupError = document.getElementById('signup-error')
const signinError = document.getElementById('signin-error')
let userDatas = []

signupForm.addEventListener('submit', (event) => {
     event.preventDefault()
     if (signupUsername.value === '' || signupPassword.value === '') {
          signupError.innerHTML = 'Field cannot be empty'
          signupError.style.color = 'red'
          signupError.style.fontWeight = '700'
     } else {
          let userData = {
               Username: signupUsername.value,
               Password: signupPassword.value
          }
          userDatas.push(userData)
          window.location = 'signIn.html'
     }
})

signinForm.addEventListener('submit', (event) => {
     event.preventDefault()
     for (let i = 0; i < userDatas.length; i++) {
          if (signinUsername.value === '' || signinPassword.value === '') {
               signinError.innerHTML = 'Field cannot be empty'
               signinError.style.color = 'red'
               signinError.style.fontWeight = '700'
          } else if(signinUsername.value !== userDatas[i].Username || signinPassword.value !== userDatas[i].Password) {
               signinError.innerHTML = "Username and Password doesn't match"
          } else if (signinUsername.value === userDatas[i].Username && signinPassword.value === userDatas[i].Password){
               window.location = 'search.html'
          }
     }
})
