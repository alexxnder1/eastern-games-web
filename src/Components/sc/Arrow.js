import { useState } from 'react';
import './Arrow.css';

const Arrow = () => {
    const [rotated, setRot] = useState(false);

    const checkScroll = () => {
      setInterval(() => {
        let down = document.querySelector(".down-rotated");
        let up = document.querySelector(".up-rotated");
        if(window.scrollY > 550)
        {
          setRot(true);
          if(down) down.className = "up-rotated";
        }
  
        else {
          setRot(false);
          if(up) up.className = "down-rotated";
        }
      }, 500);
    }
    
    return (
        <div class="Arrow">
            { checkScroll() }

            {/* Scroll Arrow */}
            <img src="arrow.png" class="down-rotated"></img>
        </div>
    );
};

export default Arrow;