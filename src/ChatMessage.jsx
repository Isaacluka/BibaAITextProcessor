import ChatForm from "./ChatForm";


const ChatMessage = ({chat}) => {
    return (
        <div className={`message ${chat.role ==="model" ? 'bot' : 'user'}-message`}>
            
            <p className="message-text">{chat.text}</p>
            
            <span className="span">
            {/* <label htmlFor="languages">Translate</label> */}
                <select name="" id="language">
                    <option value="1" >English</option>
                    <option value="2" >Spanish</option>
                    <option value="3" >Japanese</option>
                </select>

                <div className="detected" id="detected"></div>
            </span>

        </div>
        
    )
}

export default ChatMessage; 