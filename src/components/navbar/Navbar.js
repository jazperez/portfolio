import './navbar.scss';

function Navbar() {

    constructor(props) {
        super(props)
        this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
    }
    return (
    <div className="App">
    </div>
    );
}

export default Navbar;