import './experience.scss';
import Navbar from '../navbar/Navbar';
import Data from './experience.json';

const Experience = () =>  {
    return (
    <div>
        <Navbar />
        <div className="container">
            <h2 className="section-title blue">/ experience</h2>
            <div className="cards">
                { Data.map(role => {
                    return (
                        <div className="card" key={ role.id }>
                            <div className="card-title"> { role.title } </div>
                            <div className="card-subtitle"> { role.company } </div>
                            <div>{ (role.link === "") ? <div></div> 
                                : <a href={role.link} className="white card-link" alt="External link to project showcase">
                                    Blog
                                </a>
                                } 
                            </div>
                        </div>
                    )
                    })
                }
            </div>
        </div>
    </div>
    );
};

export default Experience;