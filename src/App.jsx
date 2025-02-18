import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faAnglesDown, faRobot } from '@fortawesome/free-solid-svg-icons'
import ChatForm from './ChatForm'
import ChatMessage from './ChatMessage'

function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
  const [chatHistory, setChatHistory] = useState([]);

  // const messageEndRef = useRef(null);
  return (
    <>
      <h1>Biba AI Chatbot</h1>

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
         </div>
         <div className="chatInputDiv">
          <ChatForm setChatHistory={setChatHistory}/>
          
         </div>
      </div>
    </>
  )
}

export default App
