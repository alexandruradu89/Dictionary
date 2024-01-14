let dictionary = [];
let index = 0;

function searchWord(word) {
    for (let i = 0; i <= index; ++i) {
        if (word === dictionary[i]) {
            return 1;
        }
    }
    return 0;
}

function searchWordHTML() {
    if (searchWord(document.getElementById("searchText").value)) {
        alert("The word is in the dictionary");
    } else {
        alert("The word is NOT in the dictionary");
    }
}

function addWord() {
    let currentWord = document.getElementById("addText").value;
    if (searchWord(currentWord)) {
        alert("The word is already in the dictionary");
    } else {
         dictionary[index] = currentWord;
         alert("The word was added in the dictionary");
         ++index;
    }
}


