import projectList from '../projectList';
import Project from '../components/Project';

function Projects() {

    return (
        <section className='projects' id='projects'>
            <div className='projects-title-container'>
                <h3 className='projects-title'>Projects</h3>
            </div>
            <div className='projects-list-container'>
            {projectList.map((projectItem, index) => (
                    <Project projectItem={projectItem} key={index} />
            ))}
            </div>
        </section>
    )
}

export default Projects;