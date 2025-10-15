import { ContactFormStyled, EmailInput, MessageInput } from '../styles/ContactForm.style'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import React, { useRef } from 'react';


export default function ContactForm() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");

    let emailMarker = false;
    let messageMarker = false;

    const form = useRef();
    
    // emailjs only accept form, so we need a useRef to prevent errors
    const handleClick = async (event) => {  
        
        
        if(email.length <1){
            event.preventDefault()
            setEmailError("bitte gib eine Emailadresse an.")
        }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            event.preventDefault()
            setEmailError("Deine Emailadresse war nicht korrekt")
        }else{
            event.preventDefault()
            setEmailError("")
            emailMarker = true
        }
        
        if (message.length <=10) {
            event.preventDefault()
            setMessageError("Message zu kurz")
        }else{
            event.preventDefault()
            setMessageError("")
            messageMarker = true
        }

        if (emailMarker && messageMarker) {
            event.preventDefault()

            await emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });


            setEmail('')
            setMessage('')
        }

    }

    return(
        <ContactFormStyled ref={form} >

            <EmailInput type='text' placeholder='Deine Anfrage' name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <p>
                {emailError} 
            </p>
            <MessageInput type='text' placeholder='Deine Anfrage' name="message" value={message} onChange={(event) => setMessage(event.target.value)}/>
            <p>
                {messageError}
            </p>
            
            <button onClick={handleClick}> Submit </button>
        </ContactFormStyled>

        
    )
} 