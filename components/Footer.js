import React from 'react'
import Socials from './Socials'
import { Code2, Coffee } from 'lucide-react'

function Footer() {
    return (
        <footer className="bg-secondary py-10">
            <div className="container mx-auto">
                <div className="flex flex-col items-center gap-6">
                    <Socials
                        containerStyles="flex gap-x-6"
                        iconStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
                    />

                    <p className="flex items-center gap-1.5 text-white/40 text-xs">
                        <span>Made with</span>
                        <Code2 className="w-3.5 h-3.5" />
                        <span>&</span>
                        <Coffee className="w-3.5 h-3.5" />
                        <span>in Bengaluru</span>
                    </p>

                    <p className="text-muted-foreground text-sm text-center">
                        Copyright &copy; {new Date().getFullYear()} Abhishek Agarwal. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
