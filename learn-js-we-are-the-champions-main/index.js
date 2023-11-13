import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://we-are-the-champions-319e5-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementsInDB = ref(database, 'endorsements')

const inputEl = document.getElementById('input-el')
const senderEL = document.getElementById('sender-el')
const receiverEl = document.getElementById('receiver-el')
const publishBtn = document.getElementById('publish-btn')
const clearBtn = document.getElementById('clear-btn')
const ulEl = document.getElementById('ul-el')

publishBtn.addEventListener('click', function() {
    let inputValue = inputEl.value
    // `${document.getElementById('from-el').value} 
    // \n
    // ${inputEl.value}
    // \n
    // ${document.getElementById('to-el').value}`
    if (inputValue != '') {
        push(endorsementsInDB, inputValue)
        clearInputFields()
    }
    
})

inputEl.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && e.shiftKey === false) {
        e.preventDefault()
        publishBtn.click()
        console.log(e.shiftKey && e.key === 'Enter')
    } else if (e.key === 'Enter' && e.shiftKey) {
        e.preventDefault()
        inputEl.value += 
` 
`
    }
})

onValue(endorsementsInDB, function (snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())

        clearEndorsementsList()

        clearBtn.addEventListener('click', function() {
            let itemsArray = Object.entries(snapshot.val())
        
            for (let i = 0; i < itemsArray.length; i++) {
                let exactLocation = ref(database,`endorsements/${itemsArray[i][0]}`)
                remove(exactLocation)
            }
        })

        for (let i = 0; i < itemsArray.length; i++) {
            appendToEndorsementsList(itemsArray[i])
        }

    } else {
        ulEl.innerHTML = '<p>No endorsements...yet</p>'
    }

})

clearBtn.addEventListener('click', function() {

})

function clearInputFields() {
    inputEl.value = ''
    document.getElementById('from-el').value = ''
    document.getElementById('to-el').value = ''
}

function clearEndorsementsList() {
    ulEl.innerHTML = ''
}

function appendToEndorsementsList(item) {
    let newEl = document.createElement('li')

    newEl.textContent = item[1]

    ulEl.append(newEl)
}
    

