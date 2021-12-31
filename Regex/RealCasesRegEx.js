// Regex real cases

// Matching an email address

const email = 'danielselga@gmail.com'

let regEmail = /.+@[a-z]+\.com/gi // Simple email

let regEmail2 = /^[^\s@]+@[^\s@.]+\.com$/ // More complete case, using ignored sets [^] to dont match spaces and @, more strict.

