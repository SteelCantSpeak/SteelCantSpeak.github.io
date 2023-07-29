var activity = [];

async function AddValue(locationStr= String, questionStr = String, answerStr = String, incAnswerArr = Array){

    var obj = {
        "id" : activity.length+1,
        "location": locationStr,
        "question": questionStr,
        "answer": answerStr,
        "options": incAnswerArr
    }

    activity.push(obj);
    console.log(`Added to Array with index ${obj.id}`);
}

async function RemoveValue(remIndex = Int16Array){
    console.log(`Removing index ${remIndex}`)
    for (let index = 0; index < activity.length; index++) {
        const element = activity[index];
        if (element.id == remIndex) {
            activity.splice(index, 1);
        }
    }
}

async function getJson(getIndex){
    console.log(`Posting index ${getIndex}`)
    for (let index = 0; index < activity.length; index++) {
        const element = activity[index];
        if (element.id == getIndex) {
            return activity[index];
        }
    }
}

async function getRandom(){
    var randomIndex = Math.floor(Math.random() * activity.length+1);

    console.log(`Posting index ${randomIndex}`)
    return randomIndex;
}