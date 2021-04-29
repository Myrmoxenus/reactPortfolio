
let projectObjects = [
    {
        name: 'Map-Based Recipe Search',
        image: 'portfolioicon1.png',
        link: 'https://github.com/EgiVilza/NutritiousRecipeGenerator'
    },
    {
        name: 'Weather Dashboard',
        image: 'portfolioicon2.png',
        link: 'https://github.com/Myrmoxenus/homework6'
    }, 
    {
        name: 'Password Generator',
        image: 'portfolioicon3.png',
        link: 'https://github.com/Myrmoxenus/homework3'
    }, 
    {
        name: 'Employee Tracker',
        image: 'portfolioicon4.png',
        link: 'https://github.com/Myrmoxenus/EmployeeTracker'
    },
    {
        name: 'Multiplayer Blackjack',
        image: 'portfolioicon5.png',
        link: 'https://github.com/EgiVilza/Casino_Multiplayer'
    },
    {
        name: 'Employee Directory',
        image: 'portfolioicon6.png',
        link: 'https://github.com/Myrmoxenus/EmployeeDirectory'
    }
]

const Portfolio = () => {
    return ( 
        <div className="Container">
            <h1>Portfolio</h1>

        {projectObjects.map(project => <div className="projectCard">
            <h2>{project.name}</h2>
            <img src={`/images/${project.image}`} className="projectThumbnail" alt={`Screenshot of ${project.name}`}></img>
            <a href={project.link} className="contactButton" target="_blank" rel="noreferrer"  >GitHub</a>
        </div>)}

        </div>
     );
}
  
export default Portfolio;