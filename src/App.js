import { useEffect, useState } from 'react';
import './App.css';

// Components
import Nav from './Components/Nav';
import LatestGames from './Components/LatestGames';
import PagesBar from './Components/PagesBar';

function App() {
  const [page, setPage] = useState(true);
  
  const Desc = () => {
    return (
      <div id="Desc">
        <h1 class="desc"> Eastern Games is a independent game studio from Romania founded in 2020 by a small team. </h1>
        <h1 class="motto">We make awesome video games made by a professional team. Made with fun. For fun.</h1>
      </div>
    );
  };  
  
  const waitForPage = () => {
    const int = setInterval(() => {
      setPage(!page); 
      clearInterval(int);
    }, 7000);
  };

  const changePage = (id) => {
    setPage(id);
  }

  useEffect(() => {
    if(page) {
      document.querySelector('.page-1').style.backgroundColor = "cornflowerblue";
      document.querySelector('.page-2').style.backgroundColor = "white";
    }

    else {
      document.querySelector('.page-2').style.backgroundColor = "cornflowerblue";  
      document.querySelector('.page-1').style.backgroundColor = "white";  
    }
  }, [page]);

   return (
    <div class="App">   
        {/* Nav Bar */}
        <Nav theme={false}/>

        {/* Home body */}
        <div id="body">
          { waitForPage() }
          <PagesBar changePage={changePage}/>
          { page ? <Desc/> : <LatestGames/>}
        </div>
    </div>
  );
}
export default App;
