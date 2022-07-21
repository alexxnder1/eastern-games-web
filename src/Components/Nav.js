import './Nav.css';

const Nav = (props) => {
    return (
        <div class="navmain">

            { (props.theme) ? 
            (
                <>
                <button class="homeb" onClick={() => window.location = '/'}></button>
                <button class="navb" onClick={() => window.location = '/games'}>Games</button>
                <button class="aboutb" onClick={() => window.location = '/about'}>About</button>
                <button class="Jobsb" onClick={() => window.location = '/Jobs'}>Jobs</button>
                <button class="helpb" onClick={() => window.location = '/betatester'}>Beta Testing</button>
                </>
                
            ) 
            
            : 
            
            (
                <>
                <button class="homew" onClick={() => window.location = '/'}></button>
                <button class="navw" onClick={() => window.location = '/games'}>Games</button>
                <button class="aboutw" onClick={() => window.location = '/about'}>About</button>
                <button class="Jobsw" onClick={() => window.location = '/jobs'}>Jobs</button>
                <button class="helpw" onClick={() => window.location = '/betatester'}>Beta Testing</button>
                </>
            ) 
            }
        </div>
    );
};

export default Nav;