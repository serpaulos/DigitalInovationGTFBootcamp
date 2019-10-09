var arr = ['Apple', 'Orange']

var obj = {
    name: 'Celso',
    props: {
        age: 26,
        favoriteColors: ['Black', 'Blue']
    }
}

var age = obj.props.age

console.log(age)

var [apple2] = arr
var {
    props: {
        age: age2,
        favoriteColors: [color1, color2]
    }
} = obj

console.log(age2)
console.log(color1)

