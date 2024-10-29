let memberlist = [
    "biswas",
    "rafi",
    "rakib",
    "sakib",
    "rousan",
]

function gratings(memberlist) {
    let utterance = new SpeechSynthesisUtterance(`Welcome ${memberlist}`);
    speechSynthesis.speak(utterance);
}
for (let i = 0; i < memberlist.length; i++) {
    gratings(memberlist[i])
    
}