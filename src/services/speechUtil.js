const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
export const recognition = new SpeechRecognition(); //creating a reference

recognition.onstart = () => {
    console.log("started to listen")
}

const data = recognition.onresult = (e) => {
    var data = e.results[0][0].transcript
    console.log(data)
}