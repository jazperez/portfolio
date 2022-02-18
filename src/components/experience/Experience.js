import './experience.scss';
import Navbar from '../navbar/Navbar';
import Data from './experience.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Experience() {

    return (
    <div>
        <Navbar />
        <div className="container">
            <h2 className="section-title blue">/ experience</h2>
            <p className="under-constr white">* Page still under construction *</p>
            <div className="cards">
                { Data.map(role => {
                    return (
                        <div className="card" key={ role.id }>
                            <div className="card-title"> { role.title } </div>
                            <div className="card-subtitle"> { role.company } </div>
                            <div>{ (role.link === "") ? <div></div> 
                                : <a href={role.link} className="white card-link" alt="External link to project showcase">
                                    <FontAwesomeIcon icon="external-link-alt" /> Blog
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
}

export default Experience;