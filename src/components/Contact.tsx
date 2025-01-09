import React from 'react'

export default function Contact() {
    const [name, setName] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [subject, setSubject] = React.useState<string>("");
    const [message, setMessage] = React.useState<string>("")
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">

            <div className="flex flex-col" >
                <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                <input type="text" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} />


            </div>
        </div>
    )
}
