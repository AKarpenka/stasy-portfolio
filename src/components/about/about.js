import './about.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const  About = () =>  {
    return (
        <div className="container" id="about">
            <div className="about">
                <p className="about-hey">Hey There!</p>
                <span></span>
                <div>
                    <p className="about-name">I&apos;m Anastasiya <br /> Karpenka</p>
                    <p className="about-specialization">Frontend/Full-stack Developer</p>
                    <ul className="about-description">
                        <li>► 4+ years of experience working on commercial projects.</li>
                        <li>► A generator of new ideas and a user of innovative technologies, especially those that can automate repetitive, routine tasks to save people valuable time.</li>
                        <li>► Experienced in working both individually and in a large international team.</li>
                        <li>► In love with cats and programming.</li>
                    </ul>
                    <a href="/CV_Anastasiya_Karpenka_With_Projects.pdf" download className="black-btn">
                        Download CV 
                        <FontAwesomeIcon icon={faDownload} className="icon" />
                    </a>
                </div>
                <div className="about-image">
                    <img src="/images/me.jpg" />
                </div>
            </div>
        </div>
    )
}

export default About;