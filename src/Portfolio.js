
let projectObjects = [
    {
        name: 'Map-Based Recipe Search',
        image: 'portfolioicon1.png',
        github: 'https://github.com/EgiVilza/NutritiousRecipeGenerator',
        link: 'https://egivilza.github.io/NutritiousRecipeGenerator/map.html'
    },
    {
        name: 'Weather Dashboard',
        image: 'portfolioicon2.png',
        github: 'https://github.com/Myrmoxenus/homework6',
        link: 'https://myrmoxenus.github.io/homework6/'
    }, 
    {
        name: 'Password Generator',
        image: 'portfolioicon3.png',
        github: 'https://github.com/Myrmoxenus/homework3',
        link: 'https://myrmoxenus.github.io/homework3/'
    }, 
    {
        name: 'Employee Tracker',
        image: 'portfolioicon4.png',
        github: 'https://github.com/Myrmoxenus/EmployeeTracker',
        link: 'https://drive.google.com/drive/folders/1OnADLzX_jZacfchbDS_yCszsTkBkI7e0'
    },
    {
        name: 'Multiplayer Blackjack',
        image: 'portfolioicon5.png',
        github: 'https://github.com/EgiVilza/Casino_Multiplayer',
        link: 'https://casino-multiplayer.herokuapp.com/'
    },
    {
        name: 'Employee Directory',
        image: 'portfolioicon6.png',
        github: 'https://github.com/Myrmoxenus/EmployeeDirectory',
        link: 'https://employee-directory-homework.herokuapp.com/'
    }
]

const Portfolio = () => {
    return ( 
        <div className="Container">
            <h1>Portfolio</h1>

        {projectObjects.map(project => <div className="projectCard">
            <h2>{project.name}</h2>
            <img src={`/images/${project.image}`} className="projectThumbnail" alt={`Screenshot of ${project.name}`}></img>
            <a href={project.github} className="contactButton" target="_blank" rel="noreferrer"  >GitHub</a>
            <a href={project.link} className="contactButton" target="_blank" rel="noreferrer"  >Link</a>
        </div>)}

        </div>
     );
}
  
export default Portfolio;