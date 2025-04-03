import "./Chat.css"

export function Chat({messages}) {
    return (
        <div className="chat">
            {messages.map(({ role, content }, index) => (
                <div className="message" key={index} data-role={role}>
                    {content}
                </div>
            ))}
        </div>
    )
}