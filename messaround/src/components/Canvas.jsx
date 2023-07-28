import React, { useEffect, useState } from 'react';

const html = document.documentElement;

const Canvas = (props) => {
    const [scrollFraction, setScrollFraction] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = html.scrollTop;
            const maxScrollTop = html.scrollHeight - window.innerHeight;
            const sf = scrollTop / maxScrollTop;
            setScrollFraction(sf);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setScrollFraction]);

    return <div className="animation-body">
        <div className="animation-canvas">
            <div>{scrollFraction}</div>
        </div>
    </div>
}

export default Canvas;