
import React from 'react';

const Footer: React.FC = () => {
  return (
<footer className="py-8 border-t border-white/10 bg-gradient-to-b from-transparent via-black/10 to-black/20 dark:via-white/5 dark:to-white/10">

      <div className="container mx-auto text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Jatin Patel. All rights reserved.</p>
        <p className="mt-2 text-sm">Built with React, GSAP, and Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;