import React, { useEffect, useState } from 'react';

const html = document.documentElement;

const DoorOpening = ({setStage}) => {
    const [scrollFraction, setScrollFraction] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = html.scrollTop;
            const maxScrollTop = html.scrollHeight - window.innerHeight;
            const sf = scrollTop / maxScrollTop;
            setScrollFraction(sf);
            if (sf >= 1) setStage(s => s+1);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setScrollFraction, setStage]);

    return <div className="animation-body">
        {/* todo: add noise to background like https://yuto-takahashi.com/*/}
        <div className="animation-canvas">
            <div className="opening-door" style={{top: `${-50 + (1-scrollFraction)*50}vh`, alignItems: "flex-end"}}>
                <div className="name-text">
                    Owen
                </div>
            </div>

            <div className="opening-door" style={{top: `${50 - (1-scrollFraction)*50}vh`}}>
                <div className="name-text">
                    Janssen
                </div>
            </div>
        </div>
    </div>
}

export default DoorOpening;