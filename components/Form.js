'use client';

import { ArrowRightIcon, CheckCircle2, ChevronDown, MailIcon, MessageSquare, User } from 'lucide-react';
import React, { useState } from 'react'
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { INQUIRY_TYPES } from '@/constants';
import { cn } from '@/lib/utils';
import { formatUtmForMessage, getStoredUtm } from '@/lib/utm';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Form() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [inquiryType, setInquiryType] = useState(INQUIRY_TYPES[0]);
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const next = {};
        if (name.trim().length < 2) next.name = 'Please enter your full name.';
        if (!EMAIL_REGEX.test(email.trim())) next.email = 'Please enter a valid email address.';
        if (!inquiryType) next.inquiryType = 'Please select an inquiry type.';
        if (message.trim().length < 20) next.message = 'Message should be at least 20 characters.';
        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) {
            toast.error('Please fix the highlighted fields.');
            return;
        }

        setLoading(true);
        const serviceId = 'service_j9cviju';
        const templateId = 'template_1uzp3z9';
        const publicKey = 'uTO0U5U4uuQG9v03W'

        const utmBlock = formatUtmForMessage(getStoredUtm());

        const templateParams = {
            from_name: name.trim(),
            from_email: email.trim(),
            to_name: 'Abhishek from Portfolio',
            message: `[${inquiryType}] ${email.trim()}:\n\n${message.trim()}${utmBlock}`,
        }

        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then(() => {
                setSubmitted(true);
                setName('');
                setEmail('');
                setMessage('');
                setInquiryType(INQUIRY_TYPES[0]);
                setErrors({});
            })
            .catch((error) => {
                toast.error('Something went wrong. Please try again or email me directly.');
                console.error('Error Sending Email : ', error);
            })
            .finally(() => setLoading(false))
    }

    if (submitted) {
        return (
            <div className="rounded-2xl border border-primary/25 bg-primary/5 p-8 text-center">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Message sent successfully</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Thanks for reaching out. I typically respond within 1–2 business days.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Send another message
                </Button>
            </div>
        );
    }

    const fieldClass = (field) =>
        cn(errors[field] && 'border-destructive focus-visible:ring-destructive');

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-5 overflow-visible" noValidate>
            <div className="relative z-20">
                <Label htmlFor="inquiry" className="text-sm text-muted-foreground mb-2 block">
                    What are you reaching out about?
                </Label>
                <div className="relative">
                    <select
                        id="inquiry"
                        value={inquiryType}
                        onChange={(e) => {
                            setInquiryType(e.target.value);
                            setErrors((prev) => ({ ...prev, inquiryType: undefined }));
                        }}
                        className={cn(
                            'h-[54px] w-full cursor-pointer appearance-none rounded-full border border-input bg-background pl-6 pr-12 text-base text-foreground',
                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                            'disabled:cursor-not-allowed disabled:opacity-50',
                            fieldClass('inquiryType')
                        )}
                    >
                        {INQUIRY_TYPES.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                    <ChevronDown
                        className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground"
                        size={20}
                        aria-hidden
                    />
                </div>
                {errors.inquiryType && <p className="text-destructive text-xs mt-1.5 ml-4">{errors.inquiryType}</p>}
            </div>

            <div>
                <div className="relative flex items-center">
                    <Input
                        type="text"
                        id="name"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            setErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        className={fieldClass('name')}
                    />
                    <User className="absolute right-6 text-muted-foreground" size={20} />
                </div>
                {errors.name && <p className="text-destructive text-xs mt-1.5 ml-4">{errors.name}</p>}
            </div>

            <div>
                <div className="relative flex items-center">
                    <Input
                        type="email"
                        id="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        className={fieldClass('email')}
                    />
                    <MailIcon className="absolute right-6 text-muted-foreground" size={20} />
                </div>
                {errors.email && <p className="text-destructive text-xs mt-1.5 ml-4">{errors.email}</p>}
            </div>

            <div>
                <div className="relative">
                    <Textarea
                        id="message"
                        placeholder="Tell me about the role, project, or how I can help..."
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                            setErrors((prev) => ({ ...prev, message: undefined }));
                        }}
                        className={cn('min-h-[140px] pt-4', fieldClass('message'))}
                    />
                    <MessageSquare className="absolute top-4 right-6 text-muted-foreground" size={20} />
                </div>
                {errors.message && <p className="text-destructive text-xs mt-1.5 ml-4">{errors.message}</p>}
            </div>

            <Button className="btn-glow flex items-center gap-x-1 w-full sm:w-auto sm:min-w-[180px]" disabled={loading}>
                {loading ? 'Sending...' : "Let's talk"}
                {!loading && <ArrowRightIcon size={20} />}
            </Button>
            <ToastContainer theme="colored" position="top-right" />
        </form>
    )
}

export default Form;
