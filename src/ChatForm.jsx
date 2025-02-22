import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faAnglesDown, faRobot, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react';
import { text } from '@fortawesome/fontawesome-svg-core';
import ChatMessage from './ChatMessage';

const ChatForm = ({setChatHistory}) => {
    
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        const userMessage = inputRef.current.value.trim();

        (async () => {
          let detector;
          if ('ai' in self && 'languageDetector' in self.ai){
            console.log( `The Language Detector API is available.`)
          }  
          const languageDetectorCapabilities = await self.ai.languageDetector.capabilities();
          if (languageDetectorCapabilities.languageAvailable('es')){
            
            detector = await self.ai.languageDetector.create();
            console.log(`readily`);
          
          };
          
          
          if (!('translation' in self) || !('createDetector' in self.translation)) {
            // document.querySelector('.not-supported-message').hidden = false;
            // return;
          }
        
          const input = document.getElementById('chatInput');
          const output = document.querySelector('output');
          const form = document.querySelector('form');
          const detected = document.getElementById('detected');
          const language = document.getElementById('language');
        
          // form.style.visibility = 'visible';
          
        
          //input.addEventListener('input', 
            // async () => {
              detected.textContent = " ";
              const languageTagToHumanReadable = (languageTag, targetLanguage) => {
                const displayNames = new Intl.DisplayNames([targetLanguage], {
                  type: 'language',
                });
                return displayNames.of(languageTag);
              };
              
              if (!userMessage) {
                detected.textContent = 'not sure what language this is';
                return;
              }
              const { detectedLanguage, confidence } = (
                await detector.detect(userMessage)
              )[0];
              detected.textContent = `This is ${languageTagToHumanReadable(
                detectedLanguage,
                'en'
              )}`;
              console.log(`${(confidence * 100).toFixed(
                1
              )}% sure that this is ${languageTagToHumanReadable(
                detectedLanguage,
                'en'
              )}`);
          // };
        
          // input.dispatchEvent(new Event('input'));
        
          // const languageTagToHumanReadable = (languageTag, targetLanguage) => {
          //   const displayNames = new Intl.DisplayNames([targetLanguage], {
          //     type: 'language',
          //   });
          //   return displayNames.of(languageTag);
          // };
        
          if ('createTranslator' in self.translation) {
            // document.querySelectorAll('[hidden]:not(.not-supported-message)').forEach((el) => {
            //   el.removeAttribute('hidden');
            console.log(`${userMessage}`);
            };
            
            // form.addEventListener('submit', async (e) => {
            //   e.preventDefault();
              try {
                const sourceLanguage = (await detector.detect(userMessage))[0].detectedLanguage;
                if (!['en', 'ja', 'es'].includes(sourceLanguage)) {
                  console.log('Currently, only English ↔ Spanish and English ↔ Japanese are supported.');
                  return;
                }
                const translator = await self.ai.translator.create({
                  sourceLanguage,
                  targetLanguage: language.value,
                });
                let correct = await translator.translate(`${userMessage}`)
                console.log(`${correct}`);
              } catch (err) {
                console.log('An error occurred. Please try again.');
                console.error(err.name, err.message);
            //   }
            // });
          }
    })();

      

        if (!userMessage) return;
        inputRef.current.value = "";
        
        //Update chat History with the user's message
        setChatHistory((history) => [...history, {role: "user", text: userMessage }])

    };
    return (
        <form action="#" onSubmit={handleFormSubmit}>
            <textarea  ref={inputRef} className='chatInput' id='chatInput' placeholder='Enter your prompt here...' required>
            </textarea>
            <button className='submit'><FontAwesomeIcon icon={faPaperPlane} /></button>
        </form>
    );
};

export default ChatForm