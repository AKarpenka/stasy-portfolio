import './experience.scss';
import CompayExperience from '../companyExperience/companyExperience';
import { companies } from '../../data/companies';

const Experience = () => {
    return (
        <div className="container" id="experience">
            <p className="title experience">Work Experience</p>
            {companies.reverse().map((company) => (
                <div key={company.id}>
                   <CompayExperience company={company} isLastProject={company.id === `comp${companies.length}` ? true : false} />
                    {company.id !== 'comp1' && <hr/>} 
                </div>
            ))}
        </div>
    )
}

export default Experience;