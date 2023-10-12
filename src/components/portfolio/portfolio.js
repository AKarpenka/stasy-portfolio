import './portfolio.scss';
import ProjectsSlider from '../projectsSlider/projectsSlider';
import { projects } from '../../data/projects';

const Portfolio = () => {
    return (
        <div className="container" id="portfolio">
            <p className="title portfolio">Portfolio</p>
            <p className="portfolio-description">
                Here you can see some of my successfully completed projects. 
                Both commercial projects and my personal pet-projects are presented here.
                You can learn more about each project by going to the GitHub repository and scrolling through the Readme.
            </p>
            <ProjectsSlider projects={projects} />
        </div>
    )
}

export default Portfolio;