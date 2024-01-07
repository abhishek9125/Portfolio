'use client';

import { ArrowRightIcon, MailIcon, MessageSquare, User } from 'lucide-react';
import React, { useState } from 'react'
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    console.log(`name`, name)

    return (
        <form className="flex flex-col gap-y-4">
            <div className="relative flex items-center">
                <Input type="name" id="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                <User className="absolute right-6" size={20} />
            </div>

            <div className="relative flex items-center">
                <Input type="email" id="email" placeholder="Your Email" />
                <MailIcon className="absolute right-6" size={20} value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="relative flex items-center">
                <Textarea placeholder="Type Your Message Here." />
                <MessageSquare className="absolute top-4 right-6" value={message} size={20} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <Button className="flex items-center gap-x-1 max-w-[166px]">
                Let's Talk
                <ArrowRightIcon size={20} />
            </Button>
        </form>
    )
}

export default Form;
