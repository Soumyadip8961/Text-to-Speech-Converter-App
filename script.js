let speech = new SpeechSynthesisUtterance()
let voiceList = []
let voiceSelect = document.querySelector('select')
let textToListen = document.querySelector('textarea')
let input=textToListen.value
window.speechSynthesis.onvoiceschanged = () => {
    voiceList = window.speechSynthesis.getVoices()
    speech.voice = voiceList[0]
    // console.log(voiceList)

    voiceList.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i)
    })
}

voiceSelect.addEventListener('change', (e) => {
    speech.voice = voiceList[e.target.value]
    // console.log(e.target)
})


document.querySelector('button').addEventListener('click', () => {
    if(textToListen.value.length === 0 || /^\s*$/.test(textToListen.value)) {
        textToListen.classList.add('error')
        setTimeout(() => {
            textToListen.classList.remove('error')
        }, 1000);
    }
    
    else{
        speech.text = textToListen.value
        window.speechSynthesis.speak(speech);
    }

    
})



