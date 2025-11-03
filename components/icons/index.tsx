
import React from 'react';

export const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>
);

export const MoonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
  </svg>
);

export const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-4.5 0V6.375c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125-1.125h-4.5A1.125 1.125 0 0 1 13.5 10.5Z" />
  </svg>
);

export const ReactIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" {...props}><circle cx="0" cy="0" r="2.05" /><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g></svg>
);

export const NodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12.83,12.06l4.24,2.45v-4.9l-4.24,2.45Zm-1.66,0L6.93,9.61v4.9l4.24-2.45ZM12,1.91l-6,3.46V18.6l6,3.46,6-3.46V5.37ZM5.5,17.29V6.71l6,3.46,0,6.92Z"/></svg>
);

export const TSIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M1.5 1.5v21h21v-21h-21zM11.625 16.313H8.375v-6.375h-.938V8.125h5.063v1.813h-.938v6.375zM17.438 12.125h-2.188V10.25h4v1.875h-1.812v4.188h-1.813v-4.188z" /></svg>
);

export const TailwindIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" /></svg>
);

export const GSAPIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1.8 13.9H7.6V8.1h2.6v5.8zM12 17.5c-1.2 0-2.2-.4-2.9-1.3l1.8-1.1c.4.5.9.8 1.5.8.9 0 1.4-.5 1.4-1.2v-.1c-.3.2-.8.4-1.4.4-1.3 0-2.3-.9-2.3-2.2s1-2.2 2.3-2.2c.6 0 1.1.1 1.4.4v-.1c0-.6-.4-1-1.2-1-.5 0-1 .2-1.4.6L11.2 9c.7-.7 1.8-1.1 3-1.1 1.9 0 3.1 1.2 3.1 2.9v5.7h-2.6v-2c-.3.4-.9.6-1.5.6-1.1 0-1.9-.8-1.9-2s.8-2 1.9-2 1.6.8 1.6 2v2z"/></svg>
);

export const FigmaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M15 12a3 3 0 0 1-6 0 3 3 0 0 1 3-3h3v3zm-3-6a3 3 0 0 1 3 3v3h-3a3 3 0 0 1 0-6zm-3 3a3 3 0 0 1 3-3h3v3a3 3 0 0 1-6 0zm-3 3a3 3 0 0 1 3 3v3a3 3 0 0 1-3-3zm3 3a3 3 0 0 1 3 3v-3a3 3 0 0 1-3 3z"/></svg>
);

export const NextIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 128 128" {...props}><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm31.3 83.2c-2.8-4.3-10-15.1-10.7-16.1-1.4-1.7-2.8-2.6-4.6-2.6h-7.3v13.3c0 2.8-2.3 5.1-5.1 5.1h-7.3c-2.8 0-5.1-2.3-5.1-5.1V48.5c0-2.8 2.3-5.1 5.1-5.1h19.8c6.6 0 11.2 4.4 12.5 6.3 1.1 1.7 1.7 3.5 1.7 5.4 0 4.9-3.3 8.3-5.4 10.1l-2.4 2.1 7.2 10.8c2.6 3.9 1.1 9.4-3.1 12.2-1.3.8-2.7 1.2-4.1 1.2z"/></svg>
);

export const MongoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M16.13,12a4.44,4.44,0,0,1-8.26,0,4.21,4.21,0,0,1,1-.25,1,1,0,0,0-1,1.13,3.87,3.87,0,0,0,3.63,3.63,3.87,3.87,0,0,0,3.63-3.63,1,1,0,0,0-1-1.13,4.21,4.21,0,0,1,1,.25ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,13.1a3.1,3.1,0,0,1-3.1-3.1,1,1,0,0,1,1-1,1,1,0,0,0,0-2,1,1,0,0,1-1-1,3.1,3.1,0,0,1,6.2,0,1,1,0,0,1-1,1,1,1,0,0,0,0,2,1,1,0,0,1,1,1A3.1,3.1,0,0,1,12,15.1Z"/></svg>
);

export const LogoIcon: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img
    src="/image.png"
    alt="My Logo"
    style={{ width: 60,
    height: 60,
    objectFit: "contain",
    borderRadius: "50%",
    boxShadow: "0 0 15px rgba(0, 200, 255, 0.6)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",}}
    {...props}
     onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.1)";
    e.currentTarget.style.boxShadow = "0 0 25px rgba(0, 200, 255, 0.9)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 200, 255, 0.6)";
  }}
  />
);


export const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);

export const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);

export const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
);

export const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export const EmailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
);

export const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/></svg>
);

export const AirplaneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
);

export const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

export const HtmlIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" {...props}><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
);

export const CssIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" {...props}><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm288.5 254.6l-10.1 113.1-86.4 24.1-87.2-24.1-6.2-69.5h48.2l3.2 36.3 42 11.6 42.8-11.6 4.7-52.4H83.2l-14-156.4h240.2l-4.5 50.8h-190l3.2 35.8h181.8l-4.5 50.8z"/></svg>
);

export const JsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" {...props}><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c8.6 14.7 18.6 25.9 41.2 25.9 17.4 0 27.9-7.5 27.9-18.6 0-13.2-10.5-17.4-28.8-25.6-24.5-11.1-41.5-25-41.5-51.8 0-29.4 24.2-46.5 58.3-46.5 28.5 0 47.4 10.5 59.4 34.3l-34.3 21.3c-6-10.8-11.1-17.1-24.2-17.1-12 0-20.1 5.7-20.1 17.1 0 11.4 8.1 15.3 26.5 23.9 23.9 10.8 42.7 25.9 42.7 53.2 0 34-27.3 48.9-63.2 48.9z"/></svg>
);

export const ExpressIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M22 13.585L17.587 9.17l-.707.707L20.465 13.5H3v1h17.465l-3.585 3.585.707.707L22 13.585zM9.015 4.5l-5.018 5.017.707.707L8.29 6.638V18h1V6.638l3.586 3.586.707-.707L9.015 4.5z"/></svg>
);

export const SqlIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" {...props}><path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0s224 35.8 224 80zM0 256v48c0 44.2 100.3 80 224 80s224-35.8 224-80v-48c0-44.2-100.3-80-224-80S0 211.8 0 256zm448 152v-40c0-23.2-22.1-43.9-57-61.1c-15.5-7.6-32.9-14-51.9-19.1c-10.2-2.7-20.7-5-31.9-6.8c-11.1-1.8-22.3-3.2-33.6-4.2c-1.3-.1-2.6-.2-3.8-.3c-1.2-.1-2.5-.1-3.7-.1c-.1 0-.3 0-.4 0c-.2 0-.3 0-.5 0c-.1 0-.3 0-.4 0c-.2 0-.3 0-.5 0c-1.2 0-2.5 0-3.7.1c-1.2.1-2.5.2-3.8.3c-11.3 1-22.5 2.4-33.6 4.2c-11.2 1.8-21.7 4.1-31.9 6.8c-19 5.1-36.4 11.5-51.9 19.1c-34.9 17.2-57 37.9-57 61.1v40c0 44.2 100.3 80 224 80s224-35.8 224-80z"/></svg>
);
