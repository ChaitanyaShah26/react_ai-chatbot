import TextareaAutosize from 'react-textarea-autosize'
import { useState } from "react"
import "./Controls.css"

export function Controls({ onSend }) {
    const [content, setContent] = useState("");

    function handleContentChange(event) {
        setContent(event.target.value);
    }

    function handleContentSend() {
        if (content.length > 0) {
            onSend(content);
            setContent("");
        }
    }

    function handleEnterPress(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleContentSend();
        }
    }

    return (
        <div className="controls">
            <div className="text-area-container">
                <TextareaAutosize 
                    className="text-area" 
                    placeholder="Write your message here" 
                    value={content} 
                    onChange={handleContentChange}
                    onKeyDown={handleEnterPress}
                    minRows={1}
                    maxRows={4}
                    >
                </TextareaAutosize>
            </div>
            <button className="button" onClick={handleContentSend}><SendIcon /></button>
        </div>
    );
}

function SendIcon() {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#5f6368"
        >
        <path d="M120-160v-240l320-80-320-80v-240l760 320-760 320Z" />
        </svg>
    )
}