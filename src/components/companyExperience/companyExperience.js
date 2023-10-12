/* eslint-disable react/prop-types */
import { useState } from 'react';
import './companyExperience.scss';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const CompayExperience = ({company, isLastProject}) => {
    const {companyName, companyLink, companyImg, position, startDate, endDate, description, skills, projects} = company;

    const [showProjects, setShowProjects] = useState(isLastProject);

    const renderWorkingTime = (startDate, endDate) => {
        const dateStart = new Date(startDate);
        const dateEnd = endDate ? new Date(endDate) : 'current';

        return (
            <span className="date">
                <Moment format="MMM YYYY" withTitle>
                    {dateStart}
                </Moment>
                &nbsp;-&nbsp;
                {dateEnd ==='current' ? 'current' : 
                    <Moment format="MMM YYYY" withTitle>
                        {dateEnd}
                    </Moment>
                }
                &nbsp;|&nbsp;
                <Moment to={dateEnd==='current' ? new Date() : dateEnd} ago>{dateStart}</Moment>
            </span>
        )
    };

    const renderSkills = (skills) => {
        return (
            <div className="skills">
                <p>Skills: </p>
                <div className="skill">
                    {skills.map((skill, index) => {
                        return <p key={index}>{skill}</p>
                    })}
                </div>
            </div>
        )
    };

    const toggleOpenProjects = () => setShowProjects(showProjects => !showProjects);

    return (
        <div className="company">
            <img src={companyImg} alt="" />
            <div className="company-content">
                <div className="company-general-info">
                     <a 
                        href={companyLink} 
                        target='_blank'
                        className="company-name" 
                        rel="noreferrer"
                    >
                        {companyName}
                    </a>
                    {renderWorkingTime(startDate, endDate)}
                </div>
               
                <p className="position">{position}</p>
                
                <div className="description">
                    {description?.map((item, index) => (<p key={index}>{item}</p>))}
                </div>
                {skills.length > 0 && renderSkills(skills)}
                {
                    projects.length > 0 && 
                    <>
                        <p className="collapse-btn" onClick={toggleOpenProjects} >
                            {showProjects ? 
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="triangle" width='10' height='10'>
                                    <polygon points="5,10 0,0 10,0"/>
                                </svg> :
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="triangle" width='10' height='10'>
                                    <polygon points="10,5 0,10 0,0"/>
                                </svg>
                            }
                            Details
                        </p>
                        {showProjects &&
                            <div className="company-projects">
                                {projects?.reverse().map(({projectId, projectPosition, projectName, startDate, endDate, description, skills}) => {
                                    return(
                                        <div key={projectId} className="project">
                                            <div className="project-point">
                                                <span><FontAwesomeIcon icon={faCircle} width={"10px"} /></span>
                                            </div>
                                            <div className="project-content">
                                                <p className="project-name">{projectName}</p>
                                                <p className="position">{projectPosition}</p>
                                                {renderWorkingTime(startDate, endDate)}
                                            </div>

                                            <div className="project-border"></div>
                                            <div className="project-content">
                                                <div className="description">
                                                    {description?.map((item, index) => (<p key={index}>{item}</p>))}
                                                </div>
                                                {skills.length > 0 && renderSkills(skills)}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div> 
                        }
                    </>
                   
                }
            </div>
        </div>
    )
}

export default CompayExperience;