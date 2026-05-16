import Form from '@/components/Form'
import { CALENDLY_URL } from '@/constants'
import { HomeIcon, MailIcon, PhoneCall, Calendar } from 'lucide-react'
import Link from 'next/link'

function Contact() {
    return (
        <section className="section-padding pt-4 sm:pt-6">
            <div className="container mx-auto">
                <div className="grid xl:grid-cols-2 gap-10 xl:gap-12 mb-10">
                    <div className="flex flex-col justify-center text-center xl:text-left">
                        <div className="flex items-center justify-center xl:justify-start gap-x-4 text-primary text-lg mb-4">
                            <span className="w-[30px] h-[2px] bg-primary" />
                            Get in touch
                        </div>
                        <h1 className="h1 max-w-md mb-4 mx-auto xl:mx-0">Let&apos;s work together.</h1>
                        <p className="subtitle max-w-[400px] mx-auto xl:mx-0 mb-0">
                            Hiring, collaboration, or a technical conversation — tell me what you&apos;re building.
                        </p>
                    </div>
                    <div className="hidden xl:flex w-full min-h-[260px] bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-center bg-no-repeat" />
                </div>

                {CALENDLY_URL && (
                    <div className="mb-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex items-start gap-3">
                                <Calendar className="text-primary shrink-0 mt-0.5" size={22} />
                                <div>
                                    <h2 className="font-semibold text-lg mb-1">Prefer a calendar?</h2>
                                    <p className="text-sm text-muted-foreground">
                                        Book a 30-minute intro call — no back-and-forth required.
                                    </p>
                                </div>
                            </div>
                            <Link
                                href={CALENDLY_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shrink-0"
                            >
                                Schedule on Calendly
                            </Link>
                        </div>
                    </div>
                )}

                <div className="grid xl:grid-cols-2 gap-10 xl:gap-12 overflow-visible">
                    <div className="flex flex-col gap-y-6 text-base">
                        <div className="flex items-center gap-x-4">
                            <MailIcon size={18} className="text-primary shrink-0" />
                            <a href="mailto:abhishek4075@gmail.com" className="hover:text-primary transition-colors">
                                abhishek4075@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <HomeIcon size={18} className="text-primary shrink-0" />
                            <span>Bengaluru, India</span>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <PhoneCall size={18} className="text-primary shrink-0" />
                            <a href="tel:+917017841375" className="hover:text-primary transition-colors">
                                +91-7017841375
                            </a>
                        </div>
                    </div>
                    <Form />
                </div>
            </div>
        </section>
    )
}

export default Contact
