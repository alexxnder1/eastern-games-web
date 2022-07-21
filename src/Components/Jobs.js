import { useEffect, useState } from 'react';
import './Jobs.css';

import Nav from './Nav';
import Arrow from './sc/Arrow';

const Jobs = () => {
    const [jobID, setJobID] = useState(0);

    const jobs = {
        list: ["a programmer?", "an artist?", "a good discord manager?", "tehnical animator?", "a good discord moderator?"],
        colors: ["blue", "red", "cornflowerblue", "orange", "violet"]
    }
    
    useEffect(() => {
        var int = setInterval(() => {
            let inc = jobID + 1;
            setJobID(inc);
            if(jobID === (jobs.list.length - 1))
                setJobID(0);
        }, 2600);

        return () => clearInterval(int);
    });

    useEffect(() => {
        document.querySelector('.jobs-job').textContent = jobs.list[jobID];
        document.querySelector('.jobs-job').style.color = jobs.colors[jobID];
    }, [jobID]);

    return (
        <div class='Jobs'>
            <Nav theme={false}/>
            <center>
                <Arrow/>
                {/* Wtf margin-top just doesn't work so.... <br>... */}
                <br/><br/><br/><br/><br/><br/>
                <video src='work.mp4' autoPlay={true} muted={true} class="work-vid"></video>
                <div id="brs">
                    <br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/>
                </div>
                <h1 class="jobs-title">Are you </h1><h1 class="jobs-job"></h1>
                <button class="join" onClick={() => window.open('https://discord.me/easterngames')}>Join Us</button>

                <h1 class="why-title">Hello future colleague,</h1>
                <h1 class="why-body">
                    You may be wondering, why join me? <br/>
                    Well the answer is simple, we are a small team of developers with innovative thoughts and ideas who support and look for geniuses in their fields who have passion and diligence to work on a game.
                    <br/><br/><br/>
                    You can apply for a job on our <a href="https://discord.me/easterngames">discord server</a> at <button class="why-ds" onClick={() => window.open('https://discord.gg/2eQqXDhFnV')}>#🎓・job_apply</button> section
                    
                    <br/> <br/>See you soon! 😉
                </h1>
            </center>
        </div>
    );
};

export default Jobs;