import './About.css';
import Nav from './Nav';
import Arrow from './sc/Arrow';

const About = () => {
    const changeExpNo = () => {
        setTimeout(() => {
            document.querySelector('.exp-no').innerHTML = `1+`;
        }, 2100);

        setTimeout(() => {
            document.querySelector('.exp-no').innerHTML = `2+`;
        }, 3100);
    };

    const changeEmNo = () => {
        setTimeout(() => {
            document.querySelector('.em-no').innerHTML = `1`;
        }, 2101);

        setTimeout(() => {
            document.querySelector('.em-no').innerHTML = `2`;
        }, 3100);
    };


    return (
        <div class="About">
            <Nav/>
            <div id="exp">
                 { changeExpNo() }
                 <h1 class="exp-no" on>0+</h1>
                 <h1 class="exp-text">years of experience</h1>
                 <br/>
                 { changeEmNo() }   
                 <h1 class="em-no" on>0</h1>
                 <h1 class="em-text">employees</h1>                
            </div>

            <div id="our-story">
                <button class="story-border"></button>

                <img src="story.png" class="story-image"></img>
                <h4 class="about-story">Our Story</h4>
                <h2 class="about-text">We were founded in 2020, the year of the pandemic. Thanks to quarantines that we all know two good friends with different passions: programming and design. They wanted to set up a game dev studio and work on the first
                their own game: Lacum. A game in which a lot of passion and love was put, but also many innovative ideas in creating a quality and fun gameplay! During this journey we encountered many obstacles that we managed to overcome each time. Many game ideas, most failed, but we kept going. You may say it was a waste of time, but for us it was different because we gained experience, experience that we used in these 2 beautiful years and with the help of which we've created Lacum.</h2> <h2 class="about-text">We are Eastern Games.</h2>

            </div>

            <div id="our-values">
                <button class="values-border"></button>
                <h4 class="values-title">Our Values</h4>

                <img src="values.jpg" class="values-image"></img>

                <div id="values">
                    <div id="value-1">
                        <h1 class="value-text">PUSHING OUR LIMITS AND LEARNING FROM OUR MISTAKES</h1>
                        <hr style={{ width: "160px", marginLeft: "70px" }}/>
                        <h1 class="value-desc">We boldly venture into new platforms or audiences, learning along the way, as we fix and ship.</h1>
                    </div>
                    
                    <div id="value-2">
                        <h1 class="value-text">PASSIONATE IN OUR BELIEFS YET BALANCED IN OUR ACTIONS</h1>
                        <hr style={{ width: "160px", marginLeft: "70px" }}/>
                        <h1 class="value-desc">We are passionate about what we do and always seek new opportunities. We are also flexible and proactive in business.</h1>
                    </div>

                    <div id="value-3">
                        <h1 class="value-text">CREATIVE IN OUR IDEAS YET DISCIPLINED IN OUR EXECUTION</h1>
                        <hr style={{ width: "160px", marginLeft: "70px" }}/>
                        <h1 class="value-desc">We are in the innovation business. We strongly believe in trying new tech, methods, and ideas. It’s the result that counts, not how we get there.</h1>
                    </div>
                </div>

                <Arrow/>
                <div id="test"></div>
            </div>
        </div>
    );
};

export default About;