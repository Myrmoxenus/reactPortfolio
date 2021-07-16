
let projectObjects = [
    {
        name: 'Multiplayer Blackjack',
        image: 'portfolioicon5.png',
        github: 'https://github.com/EgiVilza/Casino_Multiplayer',
        link: 'https://casino-multiplayer.herokuapp.com/',
        description:'Multiplayer Blackjack game that tracks player bank through login.',
        techused:'JavaScript, Node,js, React, Socket.io'
    },
    {
        name: 'Map-Based Recipe Search',
        image: 'portfolioicon1.png',
        github: 'https://github.com/EgiVilza/NutritiousRecipeGenerator',
        link: 'https://egivilza.github.io/NutritiousRecipeGenerator/map.html',
        description:'Project designed to incorporate multiple APIs to produce new functionality. Application was designed to allow a user to click on a world map, and receive a dish recommendation that was appropriate for the region.',
        techused:'JavaScript, AJAX, Bootstrap'
    },
    {
        name: 'Employee Tracker',
        image: 'portfolioicon4.png',
        github: 'https://github.com/Myrmoxenus/EmployeeTracker',
        link: 'https://drive.google.com/drive/folders/1OnADLzX_jZacfchbDS_yCszsTkBkI7e0',
        description:'Application used inquirer.js to ask the user for a series of prompts and dynamically manipulate assosciated MySQL tables',
        techused:'JavaScript, Node.js, MySQL'
    },
    {
        name: 'Weather Dashboard',
        image: 'portfolioicon2.png',
        github: 'https://github.com/Myrmoxenus/homework6',
        link: 'https://myrmoxenus.github.io/homework6/',
        description:'Application would query a Weather API based on user input and dynamically update a dashboard.',
        techused:'JavaScript, AJAX'
    }, 
    {
        name: 'Password Generator',
        image: 'portfolioicon3.png',
        github: 'https://github.com/Myrmoxenus/homework3',
        link: 'https://myrmoxenus.github.io/homework3/',
        description:'Generates strings according to user input.',
        techused:'JavaScript'
    }, 
    {
        name: 'Employee Directory',
        image: 'portfolioicon6.png',
        github: 'https://github.com/Myrmoxenus/EmployeeDirectory',
        link: 'https://employee-directory-homework.herokuapp.com/',
        description:'Assignment was to create a table that would update dynamically in React.',
        techused:'JavaScript, React'
    }
]


const Portfolio = () => {
    return ( 
        <div className="Container">
            <h1>Portfolio</h1>

        {projectObjects.map(project => <div className="projectCard">
            <h2>{project.name}</h2>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
            <img src={`/images/${project.image}`} className="projectThumbnail"  alt={`Screenshot of ${project.name}`}>
            </img>
                </div>
                <div className='flip-card-back'>
                    <p>{project.description}</p>
                    <p>{project.techused}</p>
                </div>
                </div>
            </div>
            <a href={project.github} className="contactButton" target="_blank" rel="noreferrer"  >GitHub</a>
            <a href={project.link} className="contactButton" target="_blank" rel="noreferrer"  >Link</a>
        </div>)}

        </div>
     );



     
}

/*

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>

*/  
export default Portfolio;