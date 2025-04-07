import Markdown from "react-markdown"
import "./Chat.css"

const welcomeMessage = {
    role: 'assistant',
    content: 'Hello! How can I help you?'
}

export function Chat({messages}) {
    return (
        <div className="chat">
            {[welcomeMessage, ...messages].map(({ role, content }, index) => (
                <div className="message" key={index} data-role={role}>
                    <Markdown>{content}</Markdown>
                </div>
            ))}
        </div>
    )
}