import projectList from '../projectList';

function Project({ projectItem }) {

    const projectTech = projectItem.tech;

    return (
        <div className='project-container'>
            <div className='project-img-container'>
                <img className='project-img' src={projectItem.img}></img>
            </div>
            <div className='project-text-container'>
                <p className='project-title'>{projectItem.title}</p>
                <ul className='project-tech-list'>
                  {projectTech.map((techItem) => (
                      <li className='project-tech-item'>{techItem}</li>
                  ))}
                </ul>
                <p className='project-description'>{projectItem.description}</p>
                <div className='project-link-container'>
                  <a href={projectItem.demoLink} target='_blank' className='project-link'>Live Demo</a>
                  <a href={projectItem.githubLink} target='_blank' className='project-link'>Github Link</a>
                </div>
            </div>
        </div>
    )
}

export default Project;