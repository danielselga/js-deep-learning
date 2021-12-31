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