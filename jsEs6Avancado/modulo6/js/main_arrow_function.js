// var obj = {
//     showContext: function showContext() {
//     //   console.log(this) 
//     // this.log("Teste") 
//     setTimeout(function() {
//         this.log("after 1000's")
//     }.bind(this), 1000)
//     },
//     log: function log(value) {
//         console.log(value);
//     }
// }

// obj.showContext()

//arrow function para resolver a referenciacao do THIS pois o mesmo ja esta implicito
var obj = {
    showContext: function showContext() {
        setTimeout(() =>{
            this.log("after 1000's")
        }, 1000)
    },
    log: function log(value) {
        console.log(value);
    }
}

obj.showContext()