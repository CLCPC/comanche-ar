
function playAudioForWord(word) {
  const audio = new Audio(`audio/${word}.mp3`);
  audio.play();
}

// Example usage (you would hook this into your actual object detection logic)
const dictionary = {
  "dog": "sarii",
  "cat": "waʔoo"
};

// Simulated detection event
function onDetect(label) {
  const word = dictionary[label];
  if (word) {
    console.log("Detected:", label, "→", word);
    playAudioForWord(word);
  }
}

// Example trigger (remove in real use)
setTimeout(() => onDetect("dog"), 2000);
