const newArray = [];

function writeCards(arrayOfNames, event){
    for(let i = 0; i < arrayOfNames.length; i++){
        newArray[i] = `Thank you, ${arrayOfNames[i]}, for the wonderful ${event} gift!`
    }
    return newArray;
}

function countDown(x){
    while(x>=0){
        console.log(x);
        x=x-1;
    }
}