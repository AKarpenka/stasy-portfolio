/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './projectsSlider.scss';

const ProjectsSlider = ({projects}) => {
    const [index, setIndex] = useState(1);
    const [length, setLength] = useState(projects.length);
    const [windowWidth,  setWindowWidth] = useState(window.screen.width);
    const [listProjects, setListProjects] = useState([]);

    const processProjects = (list) => {
        if (Array.isArray(list)) {
          let newList = [...list];
          newList.unshift(list[list.length - 1]);
          newList.push(list[0]);
          return newList;
        }
    };

    useEffect(()=>{
        setListProjects(() => processProjects(projects));
        setWindowWidth(window.screen.width);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onPrev = (size) => {
        let idx = index - 1;
        if (idx === 0) {
            size === 'lg' ? setIndex(length - 5) : setIndex(length - 3);
        } else {
            setIndex(idx);
        }
    };
    
    const onNext = (size) => {
        let idx = size === 'lg' ? 
                (length % 2 === 0 ? ((index + 1) % (length - 5)) : ((index + 1) % (length - 4)))
                : (length % 2 === 0 ? ((index + 1) % (length - 1)) : ((index + 1) % (length - 2)));
        if (idx === 0 || (length/2)+1 === idx) {
            setIndex(1);
        } else {
            setIndex(idx);
        }
    };

    const renderPrevButton = (size) => {
        if ((size === 'lg' && length > 6) || (size === 'md' && length >= 2)) {
            return <div className={`arrow arrow-left ${size}`} onClick={() => onPrev(size)}></div>;
        } else if ((size === 'lg' && length <= 6) || (size === 'md' && length <= 2)) {
            return <div></div>;
        }
    };

    const renderNextButton = (size) => {
        if ((size === 'lg' && length > 6) || (size === 'md' && length >= 2)){
            return <div className={`arrow arrow-right ${size}`} onClick={() => onNext(size)}></div>;
        } else if ((size === 'lg' && length <= 6) || (size === 'md' && length <= 2)) {
            return <div></div>;
        }
    };

    const renderProjectInfo = (singleProject) => (
        <div 
            className="slide" 
            style={{backgroundImage: `url(${singleProject.image})`, backgroundPosition: 'center'}}
        >
            <div className="slide-content">
                <p className="slide-content-title">{singleProject.title}</p>
                <p className="slide-content-description">{singleProject.description}</p>
                <div className="slide-content-btns">
                    <a href={singleProject.gitHubLink} target='_blank' rel="noreferrer" >GitHub</a>
                    {singleProject.demoLink && <a href={singleProject.demoLink} target='_blank' rel="noreferrer" >Demo</a>}
                </div>
            </div>
        </div>
    );

    const renderSlides = (list) => {
        return (
            <div className="slider-wrapper">
                <div
                className="slides"
                style={{
                    transform: `translateX(-${index * 240 - 240}px)`
                }}
                >
                    {list.map((singleProject, idx, projectsList) => {
                        if(idx % 2 !== 0) {
                            return (
                                <div
                                    className="two-slides-wrapper"
                                    key={idx}
                                >
                                    {idx !== projectsList.length-1 && renderProjectInfo(singleProject)}
                                    {idx !== projectsList.length-2 && projectsList[idx+1] && renderProjectInfo(projectsList[idx+1])}
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
            {windowWidth > 1075 && renderPrevButton('lg')}
            {windowWidth < 1075 && renderPrevButton('md')}
            {renderSlides(listProjects)}
            {windowWidth > 1075 && renderNextButton('lg')}
            {windowWidth < 1075 && renderNextButton('md')}
        </div>
    )
}

export default ProjectsSlider;