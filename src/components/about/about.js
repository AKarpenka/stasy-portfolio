import './about.scss';

const  About = () =>  {
    return (
        <div className="container">
            <div className="about">
                <p className="about-hey">Hey There!</p>
                <span></span>
                <div>
                    <p className="about-name">I&apos;m Anastasiya <br /> Karpenka</p>
                    <p className="about-specialization">Frontend/Full-stack Developer</p>
                    <p className="about-description">
                        ► 4+ years of experience working on commercial projects.
                        <br /><br />► A generator of new ideas and a user of innovative technologies, especially those that can automate repetitive, routine tasks to save people valuable time.
                        <br /><br />► Experienced in working both individually and in a large international team.
                        <br /><br />► In love with cats and programming.
                    </p>
                </div>
                <div className="about-image">
                    <img src="/photo_5253545009842605933_y.jpg" />
                </div>
            </div>
        </div>
    )
}

export default About;