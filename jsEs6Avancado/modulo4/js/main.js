// ES7 Async / Awayt

/*
O uso da palavra async na funcao ja torma a mesma em uma promisse e a mesma ja vira como resolved. async sempre vem como para junto com awayt, que espera que as outras promisses sejam resolvidas
*/

// Event emiter é exclusivo do node

const EventEmitter = require('events')

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emmit('User logged', data)
        }, 2000)
    }
}

const users = new Users()

users.on('User logged', data => {
    console.log(data)
})

users.userLogged({ user: 'Celso Henrique'})
users.userLogged({ user: 'Paulo Sergio'})