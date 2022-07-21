import './BetaTester.css';

import Nav from './Nav';
import Arrow from './sc/Arrow';

const BetaTester = () => {
    return (
        <div className="BetaTester">
            <Nav theme={false}/>
            <Arrow/>

            <center>
             <video src="prod.mp4" class="beta-video" autoPlay={true} muted={true} loop={true}></video>
             <h1 class="beta-quote">" Be sure that a success game has or had an army of betatesters that worked hard. "</h1>
             <h1 class="beta-auth">- alexnder.dev, programmer</h1>
            
             <h1 class="beta-q1">You think that you have ability to help us by sending feedback about our games?</h1>
             <h1 class="beta-q2">You can contact us on our <a href="https://discord.me/easterngames" style={{color: "#6238eb"}}>discord server</a> at <button class="beta-q3" onClick={() => window.open('https://discord.gg/sp8nhXH5tn')}>#🕹・game_testers</button> channel.</h1>

             <div id="benefits">
                 <h1 class="b-title1">Benefits</h1>

                 <div id="b-1">
                     <h1 class="b-title">Games</h1>
                     <img src="games.png" class="b-img"></img>
                     <h1 class="b-desc">You will have access to our special unreleased games!</h1>
                 </div>
                 <hr class="b-hr"/>
                 <div id="b-2">
                     <h1 class="b-title">Fun</h1>
                     <img src="fun.jpg" class="b-img"></img>
                     <h1 class="b-desc">You know... the most important thing by being a beta tester is that you will have fun playing with us and testing the game</h1>
                 </div>
                 <hr class="b-hr"/>
                 <div id="b-3">
                     <h1 class="b-title">Rewards</h1>
                     <img src="prize.png" class="b-img"></img>
                     <h1 class="b-desc">If you will be a beta tester of fame you will get special rewards when game will be released!</h1>
                 </div>
             </div>

             <h1 class="last">So what are you waiting?  <a href="https://discord.me/easterngames">Join US</a>!</h1>
            </center>
       </div>
    );
};

export default BetaTester;