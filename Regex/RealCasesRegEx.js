// Regex real cases

// Matching an email address

const email = 'danielselga@gmail.com'

const regEmail = /.+@[a-z]+\.com/gi // Simple email

const regEmail2 = /^[^\s@]+@[^\s@.]+\.com$/ // More compconste case, using ignored sets [^] to dont match spaces and @, more strict.

const regEmail3 = /^[^\s@]+@[^\s@.]+\.[^\s@.]+[^\s@]+$/ // PT-BR Case, if the user have .com.something this match too.

// Matching a twitter name

const twitterName = '@danielselgadev'

const regTwitter = /^@?(\w+)$/ // Using capturing grups for easily store in js

// Testing passwords

const password = 'N2RN3/<zvd'

const theLenght = /^.{8,32}$/
const upper = /[A-Z]/
const lower = /[a-z]/
const numbers = /[0-9]/
const special = /[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]/

const rules = [upper, lower, numbers, special]

function testPassword(pass) {
    rules.forEach(rules => {
        if(rules.test(pass)) {
            console.log(rules, 'passed')
        } else {
            console.log(rules, 'reproved')
        }
        
    })
}

testPassword(password)

// Using replace with Regex

// Organizing names
const names = ["Smith, James", "Peterson, Alyssa", "Johnson, Lynette", "Lopez, Tony"];

const newNames = names.map(function(name) {
    return name.replace(/(\w+), (\w+)/, "$2 $1") // $2 represent the second capturing group and $1 represent the frist capturing group.
})


// Validating dates (dd/mm/yyyy, dd/mm/yy)

const regDate = /^(3[01]|[12][0-9]|0?[1-9])(\/)(1[0-2]|0?[1-9])(\/)([0-9]{2})?[0-9]{2}$/

let date = '25/06/1997'
