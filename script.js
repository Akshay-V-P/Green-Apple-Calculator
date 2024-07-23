let db = new Object();
db.equation = '';
db.result = '';
db.tempequation = '';
let inputarr = []
function calcFunc(val) {
    inputarr.push(val)
    document.getElementById('textarea').value+=inputarr.at(-1);
    db.equation += inputarr.at(-1);
}

function calcresult() {
    db.result = eval(db.equation)
    document.getElementById('textarea').value=db.result
    db.tempequation = db.equation
    inputarr.length = 0
    inputarr.push(db["result"].toString())
    db.equation = inputarr.at(-1)
}

function cleartext() {
    document.getElementById('textarea').value=''
    inputarr.length = 0
    db.equation = '';
    db.result = '';
}

function memoryMinus() {
    document.getElementById('textarea').value=db.tempequation
    db.equation = db.tempequation
    inputarr.length = 0
}

function clearInput() {
    inputarr.pop()
    db.equation = '';
    for (let val in inputarr) {
        db.equation += inputarr[val].toString()
    }
    document.getElementById('textarea').value=''
    document.getElementById('textarea').value=db.equation

}