import './portfolio.scss';
import ProjectsSlider from '../projectsSlider/projectsSlider';

const projects = [
    {
        title: 'project 1',
        description: 'qwertyfsdfsdfsdf',
        gitHubLink: '',
        demoLink: '',
        image: ''
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
            <ProjectsSlider projects={projects} />
        </div>
    )
}

export default Portfolio;