'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Church, Calendar, BookOpen, Clock, Heart } from 'lucide-react';

export function PublicNav() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '/services', label: 'Service Times', icon: Clock },
        { href: '/sermons', label: 'Sermons', icon: BookOpen },
        { href: '/events', label: 'Events', icon: Calendar },
        { href: '/about', label: 'About Us', icon: Church },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/80 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between items-center">

                    {/* Logo / Church Branding */}
                    <div className="flex flex-shrink-0 items-center">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900 tracking-tight">
                            <Church className="h-6 w-6 text-orange-600" />
                            <span>Grace Church</span>
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Call to Action (SaaS Starter Clean Button Style) */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/give"
                            className="inline-flex items-center gap-1.5 rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                        >
                            <Heart className="h-4 w-4 fill-white/20" />
                            Give
                        </Link>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer Dropdown */}
            {isOpen && (
                <div className="md:hidden border-b border-gray-200 bg-white" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                >
                                    <Icon className="h-5 w-5 text-gray-400" />
                                    {link.label}
                                </Link>
                            );
                        })}
                        <div className="mt-4 px-3 pb-2">
                            <Link
                                href="/give"
                                onClick={() => setIsOpen(false)}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-orange-500"
                            >
                                <Heart className="h-5 w-5 fill-white/20" />
                                Give Online
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}