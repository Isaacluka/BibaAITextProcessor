import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faAnglesDown, faRobot } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react';
import { text } from '@fortawesome/fontawesome-svg-core';

const ChatForm = ({setChatHistory}) => {
    const inputRef = useRef();


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        inputRef.current.value = "";
        
        //Update chat History with the user's message
        setChatHistory(history => [...history, {role: "user", text: userMessage }])
    }
    return (
        <form action="#" onSubmit={handleFormSubmit}>
            <textarea  ref={inputRef} className='chatInput' placeholder='Enter your prompt here...' required>
            </textarea>
            <button><FontAwesomeIcon icon={faArrowUp} /></button>
        </form>
    );
};

export default ChatForm