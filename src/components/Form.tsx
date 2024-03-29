"use client"
import { useRef, useState } from 'react'
import emailjs from "emailjs-com"

function Form() {
    const [responseMessage, setResponseMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const formRef = useRef<HTMLFormElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);


    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const name = nameRef.current?.value;
        const email = emailRef.current?.value;
        const message = messageRef.current?.value;

        try {
            const template = {
                name: name,
                email: email,
                message: message
            }
            const response = await emailjs.send(`${process.env.NEXT_PUBLIC_APP_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_APP_TEMPLATE_ID}`, template, `${process.env.NEXT_PUBLIC_APP_PUBLIC_KEY}`);

            if (response)
                setResponseMessage("Your email has been sent successfully..")
        } catch (error) {
            setErrorMessage((error as Error).message);
        }

        formRef.current?.reset();
        setTimeout(() => {
            setResponseMessage("");
        }, 3000);
    };

    return (
        <div className='w-[90%] lg:w-[40%] bg-stone-300 p-6 absolute z-10 top-[58%] left-5 lg:top-[20%] lg:left-[50%] rounded-lg border-stone-400 border-2'>
            <form ref={formRef} onSubmit={sendEmail} className='flex flex-col gap-5 '>
                <h1 className='text-center text-[1.4rem] lg:text-[1.8rem] text-red-800 font-bold tracking-widest uppercase pb-5'>Contact with me</h1>
                {responseMessage && <p className='text-green-500 text-[1rem] lg:text-[1.2rem] ml-1'>{responseMessage}</p>}
                {errorMessage && <p className='text-red-500 text-[1rem] lg:text-[1.2rem] ml-1'>{errorMessage}</p>}
                <input type="text" name="name" placeholder='Your Full Name*' required ref={nameRef} className='px-6 py-3 rounded-lg shadow-2xl' />
                <input type="text" name="email" placeholder='Your Email Address*' required ref={emailRef} className='px-6 py-3 rounded-lg shadow-2xl' />
                <textarea name="message" rows={6} cols={6} placeholder='Enter The Message*' required ref={messageRef} className='px-6 py-3 rounded-lg shadow-2xl'></textarea>
                <button type='submit' className=' text-white shadow-2xl px-6 py-3 rounded-lg bg-teal-600 duration-300 hover:duration-300 hover:bg-teal-800'>Submit</button>
            </form>
        </div>
    )
}

export default Form
