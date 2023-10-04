import './technologies.scss';

const technologies = [
    'HTML', 'JavaScript', 'TypeScript', 'CSS', 'Sass/Less', 'React', 'React Hooks', 'React Query', 
    'React Thunk', 'Redux', 'Redux Toolkit', 'Node.js', 'Express.js', 'Material UI', 'Formik', 'Bootstrap',
    'Angular', 'Angular Material', 'MongoDB', 'IBM DB2 Warehouse', 'PostgreSQL', 'IBM Cognos', 'Jest',
    'Git', 'ClickUP', 'Trello', 'Scrum Methodology', 'Slack', 'Jenkins', 'Figma', 'Adobe Photoshop',
    'Adobe Illustrator', 'Webpack', 'Vite.js', 'Gulp', 'Linter'
];

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