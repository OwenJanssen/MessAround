import React, { useEffect, useState } from 'react';

const html = document.documentElement;

const BallBouncing = ({setStage}) => {
    const [scrollFraction, setScrollFraction] = useState(0);

    useEffect(() => {
        window.scrollTo(0,0);

        const handleScroll = () => {
            const scrollTop = html.scrollTop;
            const maxScrollTop = html.scrollHeight - window.innerHeight;
            const sf = scrollTop / maxScrollTop;
            setScrollFraction(sf);
            //if (sf >= 1) setStage(s => s+1);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setScrollFraction, setStage]);

    const size_outer = Math.min(0.5, scrollFraction) * 200;
    const size_inner = size_outer * 0.75;
    const MAX_FONT_SIZE = 60;
    return <div className="animation-body">
        {/* todo: add noise to background like https://yuto-takahashi.com/*/}
        <div className="animation-canvas">
            <div className="ball" style={{backgroundColor: `var(--color-3)`, height: `${size_outer*3.5}px`, width: `${size_outer*2}px`, borderRadius: `${size_outer}px`}}/>
            <div className="ball" style={{backgroundColor: `var(--color-9)`, height: `${size_inner*3.75}px`, width: `${size_inner*2}px`, borderRadius: `${size_inner}px`}}/>
            <div className="letters">
                <div style={{fontSize: `${Math.min(Math.max(0,(scrollFraction-0.5)*MAX_FONT_SIZE*6),MAX_FONT_SIZE)}px`}}>W</div>
                <div style={{fontSize: `${Math.min(Math.max(0,(scrollFraction-0.67)*MAX_FONT_SIZE*6),MAX_FONT_SIZE)}px`}}>E</div>
                <div style={{fontSize: `${Math.min(Math.max(0,(scrollFraction-0.83)*MAX_FONT_SIZE*6),MAX_FONT_SIZE)}px`}}>N</div>
            </div>
        </div>
    </div>
}

export default BallBouncing;