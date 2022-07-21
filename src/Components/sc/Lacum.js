import { useState } from 'react';
import Nav from '../Nav';
import './Lacum.css';

const Lacum = () => {
    const [trailerPopout, setPopout] = useState(true);

    const test = () => {
        setPopout(!trailerPopout);
    }

    const Trailer = () => {
        return (
            <div class="Trailer">
                <img src="../back.jpg" id="trailer-background" alt='background'></img>
    
                <iframe class="trailer-pop" width="560" height="315" src="https://www.youtube.com/embed/coming-soon" title="Lacum - Official Trailer ( coming soon )" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>       
                <center><button class="trailer-exit" onClick={() => {
                    setPopout(!trailerPopout);  
                }}>X</button></center> 
            </div>
        );
    }

    return (
        <div class="Lacum">
            <Nav theme={true}/>

            <h1 class="lacum-t">Lacum</h1>
            <h1 class="lacum-desc">Lacum is a dungeon quest game, where you need to beat monsters with different levels and bosses with different abilities and super-powers. Sometimes you will get to see little warriors who can be hired and that can help you throughout that specific dungeon. Also you can find money bags with a random amount of coins inside and some drinks that increase you're skills on that specific dungeon.</h1>
            <img src="../lacum.png" class="lacum-image" alt='lacum'></img>   
            <img src="../game-icon.jpg" class="playimg" alt='game-icon'></img><button class="play" onClick={() => {
                window.open("https://play.google.com/store/games");
            }}>Play now on Play Store</button>
            
            <img src="../play.png" class="watchimg" alt='watch-img'></img><button class="watch" onClick={test}>Watch Trailer</button>

            { !trailerPopout ? <Trailer/> : <></>}

            <div class="lacum-bk"></div>
        </div>  
    );
};

export default Lacum;