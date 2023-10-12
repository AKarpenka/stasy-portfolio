import './educationCertificates.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const certificates = [
    {
        id: 1,
        name: 'Complete course on Javascript + React',
        issuingOrganization: 'Udemy',
        credentialId: 'UC-268700fb-f379-499e-8cee-dedb4a179b85',
        credentialURL: 'https://www.udemy.com/certificate/UC-268700fb-f379-499e-8cee-dedb4a179b85/',
        img: '/images/certificates/React.jpg',
        skills: [
            'JavaScript',
            'React'
        ]
    }
];

const EducationCertificates = () => {
    return (
        <div className="container">
            <p className="certificates-title">Certificates</p>
            {
                certificates.reverse().map(({id, name, issuingOrganization, credentialId, credentialURL, img, skills}) => {
                    return (
                        <>
                            <div key={id} className="certificate">
                                <img src={img} alt="image of certificate" width={'500px'} />
                                <div className="certificate-content">
                                    <p className="certificate-title">{name}</p>
                                    <p>{issuingOrganization}</p>
                                    <p className="credentialId">Credential ID: {credentialId}</p>
                                    <div className="skills">
                                        <p>Skills: </p>
                                        <div className="skill">
                                            {skills.map((skill, index) => {
                                                return <p key={index}>{skill}</p>
                                            })}
                                        </div>
                                    </div>
                                    <a href={credentialURL} target='_blank' rel="noreferrer" >
                                        See Details
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} width={'14px'} className="link-icon" />
                                    </a>
                                </div>
                                
                            </div>
                            {id !== 1 && certificates.length > 1 && <hr/>} 
                        </>
                        
                    )
                })
            }
        </div>
    )
}

export default EducationCertificates;