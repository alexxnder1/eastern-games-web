import './Games.css';

import Nav from './Nav';
import Lacum_div from './sc/Lacum_div';

const Games = () => {
    return (
        <div class="Games">
            <Nav theme={false}/>
            <h1 class="pres">Games</h1>

            <Lacum_div anim={true}/>
        </div>
    );
};

export default Games;