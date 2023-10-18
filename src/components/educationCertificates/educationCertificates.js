import './educationCertificates.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { certificates } from '../../data/certificates';

const EducationCertificates = () => {
    return (
        <div className="container" id="certificates">
            <p className="title certificates">Certificates</p>
            {
                certificates.reverse().map(({id, name, issuingOrganization, credentialId, credentialURL, img, skills}) => {
                    return (
                        <div key={id}>
                            <div className="certificate">
                                <img src={img} alt="image of certificate" />
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
                        </div>
                    )
                })
            }
        </div>
    )
}

export default EducationCertificates;