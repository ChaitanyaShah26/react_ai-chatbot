import "./Controls.css"

export function Controls() {
    return (
        <div className="controls">
            <div className="text-area-container">
                <textarea className="text-area" placeholder="Write your message here"></textarea>
            </div>
            <button className="button"><SendIcon /></button>
        </div>
    )
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