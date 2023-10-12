import './education.scss';
import Moment from 'react-moment';
import { education } from '../../data/education';

const Education = () => {
    return (
        <div className="container" id="education">
            <p className="title education">Education</p>
            {
                education.reverse().map(({id, uniName, uniLogo, faculty, department, grade, startDate, endDate}) => {
                    const dateStart = new Date(startDate);
                    const dateEnd = new Date(endDate);

                    return (
                        <div key={id} className="education-container" >
                            <img src={uniLogo} alt="Univercity Logo" width={'70px'} />
                            <div className="education-content">
                                <p className="uni-title">{uniName}</p>
                                <p>Faculty: {faculty}</p>
                                <p>Department: {department}</p>
                                <p className="date">
                                    <Moment format="YYYY" withTitle>
                                        {dateStart}
                                    </Moment>
                                    &nbsp;-&nbsp;
                                    <Moment format="YYYY" withTitle>
                                        {dateEnd}
                                    </Moment>
                                </p>
                                <p>Grade: {grade}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Education;