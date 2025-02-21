import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faAnglesDown, faRobot, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react';
import { text } from '@fortawesome/fontawesome-svg-core';
//import './App.jsx'

// (async () => {
//     if (!('ai' in self) || !('languageDetector' in self.ai)) {
//       document.querySelector('.not-supported-message').hidden = false;
//       return;
//     }
//     const detector = await self.ai.languageDetector.create();
// })();

// const detector = await self.ai.languageDetector.create();


const ChatForm = ({setChatHistory}) => {
    // (async () => {
    //     if (!('ai' in self) || !('languageDetector' in self.ai)) {
    //       document.querySelector('.not-supported-message').hidden = false;
    //       return;
    //     }
      
        //const input = document.getElementById('chatInput');
        //const output = document.getElementById('chatOutput');
        //const form = document.querySelector('form');
        //const detected = document.getElementsById('span');
        //const language = document.querySelector('select');
      
        //form.style.visibility = 'visible';
        // const detector = await self.ai.languageDetector.create();
      
        // input.addEventListener('input', async () => {
        //   if (!input.value.trim()) {
        //     detected.textContent = 'not sure what language this is';
        //     return;
        //   }
        //   const { detectedLanguage, confidence } = (
        //     await detector.detect(input.value.trim())
        //   )[0];
        //   detected.textContent = `${(confidence * 100).toFixed(
        //     1
        //   )}% sure that this is ${languageTagToHumanReadable(
        //     detectedLanguage,
        //     'en'
        //   )}`;
        //   console.log(detected);
        // });
        
        // input.dispatchEvent(new Event('input'));
      
        // const languageTagToHumanReadable = (languageTag, targetLanguage) => {
        //   const displayNames = new Intl.DisplayNames([targetLanguage], {
        //     type: 'language',
        //   });
        //   return displayNames.of(languageTag);
        // };
      
        // if ('ai' in self && 'translator' in self.ai) {
        //   document.querySelectorAll('[hidden]:not(.not-supported-message)').forEach((el) => {
        //     el.removeAttribute('hidden');
        //   });
      
        //   form.addEventListener('submit', async (e) => {
        //     e.preventDefault();
        //     try {
        //       const sourceLanguage = (await detector.detect(input.value.trim()))[0].detectedLanguage;
        //       if (!['en', 'ja', 'es'].includes(sourceLanguage)) {
        //         output.textContent = 'Currently, only English ↔ Spanish and English ↔ Japanese are supported.';
        //         return;
        //       }
        //       const translator = await self.ai.translator.create({
        //         sourceLanguage,
        //         targetLanguage: language.value,
        //       });
        //       output.textContent = await translator.translate(input.value.trim());
        //     } catch (err) {
        //       output.textContent = 'An error occurred. Please try again.';
        //       console.error(err.name, err.message);
        //     }
        //   });
        // }
     // })();


    const inputRef = useRef();

    

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        // const { detectedLanguage, confidence } = (
        //     detector.detect(userMessage)
        //   )[0];
        //   detected.textContent = `${(confidence * 100).toFixed(
        //     1
        //   )}% sure that this is ${languageTagToHumanReadable(
        //     detectedLanguage,
        //     'en'
        //   )}`;
        //   console.log(detected);
        // if (!userMessage) return;
        // inputRef.current.value = "";
        
        //Update chat History with the user's message
        setChatHistory(history => [...history, {role: "user", text: userMessage }])
    }
    return (
        <form action="#" onSubmit={handleFormSubmit}>
            <textarea  ref={inputRef} className='chatInput' id='chatInput' placeholder='Enter your prompt here...' required>
            </textarea>
            <button className='submit'><FontAwesomeIcon icon={faPaperPlane} /></button>
        </form>
    );
};

export default ChatForm