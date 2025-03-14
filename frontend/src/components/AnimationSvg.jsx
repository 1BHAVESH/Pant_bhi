import React, { useState, useEffect } from 'react';

const AnimationSVG = ({ height = "48px", width = "57px", marginLeft="10px"}) => {
    const [isActiveAnimation, setIsActiveAnimation] = useState(false);

    useEffect(() => {
        const interval = setTimeout(() => {
            setIsActiveAnimation(!isActiveAnimation);
        }, 500);
        return () => clearTimeout(interval); // Clean up timeout to prevent memory leaks
    }, [isActiveAnimation]); // Depend on isActiveAnimation to re-trigger on change

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            viewBox="14.751998901367188 11.691999435424805 73.18000793457031 77.32499694824219"
            enableBackground="new 0 0 100 100"
            space="preserve"
            className={`icon-icon-0 ${!isActiveAnimation ? 'block' : 'hidden'}`} // Use Tailwind classes for toggle
            style={{ height, width, marginLeft }} // Apply height and width as inline styles
        >
            <path fill="#50a060" d="M61.64 58.881c-7.924 9.351-16.084 9.953-16.044 10.52-2.867-21.792 10.982-37.815 10.982-37.815-2.932 2.908-5.308 5.971-7.229 9.104 0.133-0.221 0.224-0.371 0.224-0.371-3.369-2.856-5.174-11.592-5.174-11.592 0.793 10.315 3.651 14.212 3.651 14.212 0.256-0.487 0.697-1.241 1.041-1.817-2.927 4.887-4.749 9.935-5.813 14.842 0.046-0.237 0.075-0.386 0.075-0.386-1.904-5.694-8.476-10.188-8.476-10.188 5.237 5.395 7.674 14.616 7.674 14.616 0.026-0.203 0.082-0.541 0.15-0.936-2.529 16.138 2.583 29.947 2.583 29.947h7.432c-3.517-5.776-5.59-11.39-6.639-16.701 0.099 0.438 0.17 0.688 0.17 0.688C54.498 69.195 61.64 58.881 61.64 58.881z" />
            <path fill="#50a060" d="M51.316 59.684c0 0-3.159-22.583 36.616-22.119 0 0-4.555 34.476-28.624 31.875 0 0 8.829-7.395 8.829-15.872C68.138 53.568 61.35 50.951 51.316 59.684z" />
            <path fill="#50a060" d="M34.543 51.682c0 0-18.061 3.744-19.791-28.382 0 0 28.069 1.85 27.243 21.414 0 0-6.435-6.733-13.277-6.285C28.719 38.429 26.965 44.047 34.543 51.682z" />
            <path fill="#50a060" d="M51.258 31.022c0 0-3.108-13.878 21.645-15.606 0 0-1.084 21.666-16.18 21.27 0 0 5.112-5.046 4.684-10.315C61.406 26.37 57.053 25.086 51.258 31.022z" />
            <path fill="#50a060" d="M41.5 31.083c0 0-9.766-3.453-1.254-19.391 0 0 12.947 9.051 6.862 18.211 0 0-1.134-5.105-4.552-6.881C42.556 23.022 40.08 25.212 41.5 31.083z" />
        </svg>
    );
};

export default AnimationSVG;
