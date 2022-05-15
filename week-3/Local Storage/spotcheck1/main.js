let userStorage = {
    darkMode: true,
    showSideNav: false,
    defaultResultCount: 9,
    latestMarks: {
        sectionA: 92,
        sectionB: 11
    },
    cart: [
        { id: 3112, count: 2 },
        { id: 812, count: 16 }
    ]
}

localStorage.userStorage = JSON.stringify(userStorage)
localStorage.setItem('userStorage', JSON.stringify(userStorage));
localStorage['userStorage'] = JSON.stringify(userStorage)

let userData = JSON.parse(localStorage.userStorage)
userData.cart[userData.cart.length - 1].count
console.log(userData)
