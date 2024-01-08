'use client';

import { ArrowRightIcon, MailIcon, MessageSquare, User } from 'lucide-react';
import React, { useState } from 'react'
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!email || !name || !message) {
            toast.error('Please fill the form', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        setLoading(true);
        const serviceId = "service_j9cviju";
        const templateId = "template_1uzp3z9";
        const publicKey = "uTO0U5U4uuQG9v03W"

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Abhishek from Portfolio',
            message: `${email} : ${message}`
        }

        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                toast.success('🦄 Email Sent Successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                console.log('Email Sent Successfully : ', response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                toast.error('Error Sending Email Try Again', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                console.error('Error Sending Email : ', error);
            })
            .finally(() => {
                setLoading(false)
            })

    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
            <div className="relative flex items-center">
                <Input type="text" id="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                <User className="absolute right-6" size={20} />
            </div>

            <div className="relative flex items-center">
                <Input type="email" id="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <MailIcon className="absolute right-6" size={20} />
            </div>

            <div className="relative flex items-center">
                <Textarea placeholder="Type Your Message Here." value={message} size={20} onChange={(e) => setMessage(e.target.value)} />
                <MessageSquare className="absolute top-4 right-6" />
            </div>
            <Button className="flex items-center gap-x-1 max-w-[166px]" disabled={loading}>
                Let's Talk
                <ArrowRightIcon size={20} />
            </Button>
            <ToastContainer />
        </form>
    )
}

export default Form;
