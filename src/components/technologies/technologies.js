import './technologies.scss';
import { technologies } from '../../data/technologies';

const Technologies = () => {
    return (
        <div className="container dark">
            <div className="technologies">
                {
                    technologies.map((item, index) => {
                        return (
                            <p key={index} >{item}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Technologies;