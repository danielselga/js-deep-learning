const states = ['Alaska',
  'Alabama',
  'Arkansas',
  'American Samoa',
  'Arizona',
  'California',
  'Colorado',
  'Connecticut',
  'District of Columbia',
  'Delaware',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Iowa',
  'Idaho',
  'Illinois',
  'Indiana',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Massachusetts',
  'Maryland',
  'Maine',
  'Michigan',
  'Minnesota',
  'Missouri',
  'Mississippi',
  'Montana',
  'North Carolina',
  'North Dakota',
  'Nebraska',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'Nevada',
  'New York',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Virginia',
  'Virgin Islands',
  'Vermont',
  'Washington',
  'Wisconsin',
  'West Virginia',
  'Wyoming']

// Searching inside one array.
function searchArr (word, arr) {
  // Converting frist word to uppercase
  const searchedWord = word[0].toUpperCase() + word.slice(1)
  // Search inside array.
  const index = arr.indexOf(searchedWord)
  if (index === -1) {
    return console.log(index)
  } else {
    return console.log(arr[index])
  }
}

searchArr('wisconsin', states)

// Search the position of a number inside one array.
const arr = [5, 8, 1, 100, 12, 3, 12]

function searchArrIndex (arr, num = 12) {
  const index = arr.findIndex(el => {
    return el === num
  })

  return console.log(index)
}

searchArrIndex(arr, 12)
