/* eslint-disable react/prop-types */
import { useState } from 'react';
import './projectsSlider.scss';


const ProjectsSlider = ({projects}) => {
    const [index, setIndex] = useState(1);
    const [length, setLength] = useState(projects.length);

    const processProjects = (list) => {
        if (Array.isArray(list)) {
          let newList = [...list];
          newList.unshift(list[list.length - 1]);
          newList.push(list[0]);
          return newList;
        }
      }

    const [listProjects, setListProjects] = useState(() => processProjects(projects));

    const onPrev = () => {
        let idx = index - 1;
        if (idx === 0) {
            setIndex(length - 5);
        } else {
            setIndex(idx);
        }
    };
    
    const onNext = () => {
        let idx = (index + 1) % (length - 4);
        if (idx === 0) {
            setIndex(1);
        } else {
            setIndex(idx);
        }
    };

    const renderPrevButton = () => {
        return <div className="arrow arrow-left" onClick={onPrev}></div>;
    };

    const renderNextButton = () => {
        return <div className="arrow arrow-right" onClick={onNext}></div>;
    };

    const renderSlides = (list) => {
        return (
            <div className="slider-wrapper">
                <div
                className="slides"
                style={{
                    transform: `translateX(-${index * 240 - 240}px)`
                }}
                >
                    {list.map((project, idx, projectsList) => {
                        if(idx % 2 !== 0) {
                            return (
                                <div
                                    className="two-slides-wrapper"
                                    key={idx}
                                >
                                    <div 
                                        className="slide" 
                                        style={{backgroundImage: `url(${project.image})`}}
                                    >
                                        <div className="slide-content">
                                            <p className="slide-content-title">{project.title}</p>
                                            <p className="slide-content-description">{project.description}</p>
                                            <div className="slide-content-btns">
                                                <a href={project.gitHubLink}>GitHub</a>
                                                <a href={project.demoLink}>Demo</a>
                                            </div>
                                        </div>
                                    </div>
                                    {idx !== projectsList.length-2 &&
                                        <div 
                                            className="slide" 
                                            style={{backgroundImage: `url(${projectsList[idx+1]?.image})`}}
                                        >
                                            <div className="slide-content">
                                                <p className="slide-content-title">{projectsList[idx+1]?.title}</p>
                                                <p className="slide-content-description">{projectsList[idx+1]?.description}</p>
                                                <div className="slide-content-btns">
                                                    <a href={projectsList[idx+1]?.gitHubLink}>GitHub</a>
                                                    <a href={projectsList[idx+1]?.demoLink}>Demo</a>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }

    return (
        <div className="carousel">
            {renderPrevButton()}
            {renderSlides(listProjects)}
            {renderNextButton()}
        </div>
    )
}

export default ProjectsSlider;