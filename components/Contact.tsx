
import React, { useRef, useEffect, useState } from 'react';
import { GithubIcon, LinkedinIcon, CheckCircleIcon } from './icons';

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
    const [touched, setTouched] = useState<{ name?: boolean; email?: boolean; message?: boolean }>({});

    const validate = (data: typeof formData) => {
        const newErrors: { name?: string; email?: string; message?: string } = {};

        if (!data.name.trim()) {
            newErrors.name = 'Name is required.';
        } else if (data.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters.';
        }

        if (!data.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        if (!data.message.trim()) {
            newErrors.message = 'Message is required.';
        } else if (data.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters.';
        }

        return newErrors;
    };

    // Re-validate whenever form data changes to update the submit button state
    useEffect(() => {
        const validationErrors = validate(formData);
        setErrors(validationErrors);
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id } = e.target;
        setTouched(prevTouched => ({
            ...prevTouched,
            [id]: true,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mark all fields as touched to show errors on all invalid fields upon submission attempt
        setTouched({ name: true, email: true, message: true });

        const validationErrors = validate(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            const recipientEmail = 'jatin.patel@example.com';
            const subject = `Message from ${formData.name} via Portfolio`;
            const body = `You have a new message from your portfolio contact form:\n
Name: ${formData.name}
Email: ${formData.email}
Message:
${formData.message}`;

            const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            window.location.href = mailtoLink;
            setSubmitted(true);
        }
    };

    // FIX: Add a type check for `val` before calling `.trim()` as `Object.values` can return `unknown[]`.
    const isFormValid = Object.keys(errors).length === 0 && Object.values(formData).every(val => typeof val === 'string' && val.trim() !== '');

    const getInputClasses = (fieldName: 'name' | 'email' | 'message') => {
        const baseClasses = 'w-full bg-white/10 dark:bg-black/20 p-4 rounded-lg border focus:outline-none transition-all duration-300';
        if (touched[fieldName] && errors[fieldName]) {
            return `${baseClasses} border-red-500 focus:ring-2 focus:ring-red-500`;
        }
        if (touched[fieldName] && !errors[fieldName] && formData[fieldName]) {
            return `${baseClasses} border-green-500/80 dark:border-green-400/80 focus:ring-2 focus:ring-green-500/80 dark:focus:ring-green-400/80`;
        }
        return `${baseClasses} border-white/20 focus:ring-2 focus:ring-blue-500 dark:focus:ring-sky-400`;
    };

    return (
        <section id="contact" className="container mx-auto py-16 sm:py-20 md:py-32 px-4 sm:px-6" tabIndex={-1}>

            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                <span className="text-blue-600 dark:text-sky-400">Get In Touch</span>
            </h2>
            <div className="max-w-2xl mx-auto">
                {submitted ? (
                    <div className="text-center p-8 bg-green-500/20 rounded-lg border border-green-500">
                        <CheckCircleIcon className="w-16 h-16 mx-auto text-green-400" />
                        <h3 className="text-2xl font-bold mt-4">Thank You!</h3>
                        <p className="mt-2 text-lg">Your email client has been opened. Please click send to deliver your message.</p>
                    </div>
                ) : (
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
                        <div className="contact-field group">
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-required="true"
                                aria-invalid={!!errors.name}
                                aria-describedby={errors.name ? "name-error" : undefined}
                                className={getInputClasses('name')}
                            />
                            {touched.name && errors.name && <p id="name-error" className="text-red-400 text-sm mt-2">{errors.name}</p>}
                        </div>
                        <div className="contact-field group">
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-required="true"
                                aria-invalid={!!errors.email}
                                aria-describedby={errors.email ? "email-error" : undefined}
                                className={getInputClasses('email')}
                            />
                            {touched.email && errors.email && <p id="email-error" className="text-red-400 text-sm mt-2">{errors.email}</p>}
                        </div>
                        <div className="contact-field group">
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-required="true"
                                aria-invalid={!!errors.message}
                                aria-describedby={errors.message ? "message-error" : undefined}
                                className={getInputClasses('message')}
                            ></textarea>
                            {touched.message && errors.message && <p id="message-error" className="text-red-400 text-sm mt-2">{errors.message}</p>}
                        </div>
                        <div className="contact-field text-center">
                            <button 
                                type="submit" 
                                disabled={!isFormValid}
                                className="bg-blue-600 dark:bg-sky-400 text-white dark:text-gray-900 py-3 px-12 rounded-full text-lg font-bold transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/50 dark:shadow-sky-400/40 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                )}
                 <div className="flex justify-center space-x-8 mt-16">
                    <a href="https://github.com/jatin03patel" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 hover:text-blue-600 dark:hover:text-sky-400 transition-transform duration-300 hover:scale-125" data-cursor-hover><GithubIcon className="w-8 h-8" /></a>
                    <a href="https://www.linkedin.com/in/jatin-patel-320a5831a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-blue-600 dark:hover:text-sky-400 transition-transform duration-300 hover:scale-125" data-cursor-hover><LinkedinIcon className="w-8 h-8" /></a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
