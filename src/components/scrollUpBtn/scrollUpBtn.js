import './scrollUpBtn.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const ScrollUpBtn = () => {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollPosition > 150 ?
            (<div 
                className="scroll-up-btn" 
                onClick={scrollTop}
            >
                <FontAwesomeIcon icon={faArrowUp} />
            </div>) : (<></>)
}

export default ScrollUpBtn;
