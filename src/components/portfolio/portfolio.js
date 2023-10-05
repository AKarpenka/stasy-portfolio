import './portfolio.scss';
import ProjectsSlider from '../projectsSlider/projectsSlider';

const projects = [
    {
        title: 'project 1',
        description: 'qwertyfsdfsdfsdf',
        gitHubLink: '',
        demoLink: '',
        image: 'photo_5253545009842605933_y.jpg'
    },
    {
        title: 'project 2',
        description: 'qwertyfsdfsdfsdf',
        gitHubLink: '',
        demoLink: '',
        image: ''
    },
    {
        title: 'project 3',
        description: 'qwertyfsdfsdfsdf',
        gitHubLink: '',
        demoLink: '',
        image: ''
    },
    {
        title: 'project 4',
        description: 'qwertyfsdfsdfsdf',
        gitHubLink: '',
        demoLink: '',
        image: ''
    },
    {
        title: 'project 5',
        description: 'qwertyfsdfsdfsdf',
        gitHubLink: '',
        demoLink: '',
        image: ''
    },
    {
        title: 'project 6',
        description: 'qwertyfsdfsdfsdf',
        gitHubLink: '',
        demoLink: '',
        image: ''
    },
    {
        title: 'project 7',
        description: 'qwertyfsdfsdfsdf',
        gitHubLink: '',
        demoLink: '',
        image: ''
    },
];

const Portfolio = () => {
    return (
        <div className="container">
            <p className="portfolio-title">Portfolio</p>
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