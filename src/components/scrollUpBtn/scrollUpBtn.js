import './scrollUpBtn.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollUpBtn = () => {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="scroll-up-btn" onClick={scrollTop}>
            <FontAwesomeIcon icon={faArrowUp} />
        </div>
    )
}

export default ScrollUpBtn;
