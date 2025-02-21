import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faAnglesDown, faRobot } from '@fortawesome/free-solid-svg-icons'
import ChatForm from './ChatForm'
import ChatMessage from './ChatMessage'


// const languageDetectorCapabilities = await self.ai.languageDetector.capabilities();
// const canDetect = languageDetectorCapabilities.capabilities;
// let detector;
// if (canDetect === 'no') {
//   // The language detector isn't usable.
//   console.log("HI THERE!");
// }
// if (canDetect === 'readily') {
//   // The language detector can immediately be used.
//   detector = await self.ai.languageDetector.create();
// } else {
//   // The language detector can be used after model download.
//   detector = await self.ai.languageDetector.create({
//     monitor(m) {
//       m.addEventListener('downloadprogress', (e) => {
//         console.log(`Downloaded ${e.loaded} of ${e.total} bytes.`);
//       });
//     },
//   });
//   await detector.ready;
// }


// const someUserText = 'Hallo und herzlich willkommen!';
// const results = await detector.detect(someUserText);
// for (const result of results) {
//   // Show the full list of potential languages with their likelihood, ranked
//   // from most likely to least likely. In practice, one would pick the top
//   // language(s) that cross a high enough threshold.
//   console.log(result.detectedLanguage, result.confidence);
// }
// // (Output truncated):
// // de 0.9993835687637329
// // en 0.00038279531872831285
// // nl 0.00010798392031574622
// // ...



function App() {
  
  const [chatHistory, setChatHistory] = useState([]);

  // const messageEndRef = useRef(null);
  return (
    <>
      <h2 className='heroText'>Biba AI Chatbot</h2>

      <div className='chatInterface'>
        <div className="chatHeader">
          <div className='chatIcon'>
            <FontAwesomeIcon icon={faRobot} />
            <h2>Biba</h2> 
          </div>
          
          <button><FontAwesomeIcon icon={faAnglesDown} /></button>
          
        </div>
         <div className="chatOutput">

          {/* Render the chat history dynamically */}
          {chatHistory.map((chat, index) =>(
            <ChatMessage key={index} chat={chat}/>
          ))}
          {/* <p>${results}</p> */}
         </div>
         <div className="chatInputDiv">
          <ChatForm setChatHistory={setChatHistory}/>
          
         </div>
      </div>
    </>
  )
}

export default App
