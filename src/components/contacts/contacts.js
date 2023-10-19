import './contacs.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBasketball } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTelegram, faInstagram, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'

const Contacts = () => {
    return (
        <div className="container contacts" id="contacts">
            <p className="title contacts">Contacts</p>
            <p>Let&apos;s stay in touch!</p>
            <p>I&apos;m open to new offers, you can find me here:</p>
            <p className="email"><FontAwesomeIcon icon={faEnvelope} className="icon" /> knesty@yandex.by</p>
            <div>
                <a href="https://www.linkedin.com/in/anastasiya-karpenka/" target='_blank' rel="noreferrer" >
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                    <span>linkedin.com/in/anastasiya-karpenka/</span>
                </a>
            </div>
            <div>
                <a href="https://github.com/AKarpenka" target='_blank' rel="noreferrer" >
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                    <span>AKarpenka</span>
                </a>
            </div>
            <div>
                <a href="http://t.me/nastya_karpenka" target='_blank' rel="noreferrer" >
                    <FontAwesomeIcon icon={faTelegram} className="icon" />
                    <span>@nastya_karpenka</span>
                </a>
            </div>
            <div>
               <a href="https://instagram.com/stasy.karpenka" target='_blank' rel="noreferrer" >
                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                    <span>@stasy.karpenka</span>
                </a> 
            </div>
            <div>
                <a href="https://twitter.com/stasyKarpenka" target='_blank' rel="noreferrer" >
                    <FontAwesomeIcon icon={faSquareXTwitter} className="icon" />
                    <span>@stasyKarpenka</span>
                </a> 
            </div>
            <div>
                <a href="https://dribbble.com/stasyKarpenka" target='_blank' rel="noreferrer" >
                    <FontAwesomeIcon icon={faBasketball} className="icon" />
                    <span>@stasyKarpenka</span>
                </a>
            </div>
        </div>
    )
}

export default Contacts;