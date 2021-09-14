import './experience.scss';
import Navbar from '../navbar/Navbar';

function Experience() {
    const roles = [
        { id: 1, 
        title: 'Software Engineering Intern', 
        company: 'PiñataFarms', 
        date: 'Sep 2020 - Dec 2020', 
        location: 'Remote', 
        team: 'Engineering', 
        description:'Built various web clients, both for internal infrastructure and consumer facing products using Vue.js, GraphQL and AWS. Designed and tested accessible and high quality UI/UX using Figma. Debugged and updated existing features.'},
        { id: 2, 
        title: 'Software Engineering Intern', 
        company: 'Uber', 
        date: 'Sep 2020 - Dec 2020', 
        location: 'Remote', 
        team: 'Driving Safety', 
        description:'Developed a feature in Scala on an existing platform to process telematics data aimed towards building products to ensure the safety of users on the Uber platform. Queried and analyzed data using SQL and Jupyter Notebook.'},
    ];

    return (
    <div>
        <Navbar />
        <div className="container">
            <p className="under-constr white">Page under construction, please come back later 😊 </p>
        </div>
    </div>
    );
}

export default Experience;