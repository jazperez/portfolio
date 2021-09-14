import './experience.scss';
import Navbar from '../navbar/Navbar';
import Data from './experience.json';

function Experience() {

    return (
    <div>
        <Navbar />
        <div className="container">
            <h2 className="section-title blue">Work Experience</h2>
            <div className="cards">
                { Data.map(role => {
                    return (
                        <div className="card" key={ role.id }>
                            <div className="card-title"> { role.title } </div>
                            <div className="card-subtitle"> { role.company } </div>
                            <div>
                                <div className="card-details">{ role.location }</div> | <div className="card-details">{ role.date }</div>
                            </div>
                            <div>{ role.team }</div>
                            <div>{ role.description }</div>
                            <div>{ role.projects }</div>
                            <div>{ role.link }</div>
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