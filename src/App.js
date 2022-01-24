import './App.css';
import Card from './components/Card';
import Image from './components/Image';
import { useEffect, useState } from 'react';
import membrana from './images/cyt-membrana.jpg';
import cytoplazma from './images/cytoplazma.png';
import er from './images/emergency-room.jpeg';
import gk from './images/golgiho-komplex.jpeg';
import jadro from './images/jadro.jpeg';
import lyzozomy from './images/lyzozomy.jpeg';
import mitochondrie from './images/mitochondrie.jpeg';
import ribozomy from './images/ribozomy.png';
import Div from './components/Div';
import Board from './components/Board';

const pieces = [membrana, cytoplazma, er, gk, jadro, lyzozomy, mitochondrie, ribozomy];
const names = ["cytoplazmatická membrána", "cytoplazma", "endoplazmatické retikulum", "golgiho komplex", "jadro", "lyzozómy", "mitochondrie", "ribozómy"];

const piecePairs = {
  "cytoplazmatická membrána": membrana,
  "cytoplazma": cytoplazma,
  "endoplazmatické retikulum": er,
  "golgiho komplex": gk,
  "jadro": jadro,
  "lyzozómy": lyzozomy,
  "mitochondrie": mitochondrie,
  "ribozómy": ribozomy
};

function App() {
  const [correctPairs, setCorrectPairs] = useState({});

  useEffect(() => {
    let pairs = {};

    // iterate over piecePairs's keys
    Object.keys(piecePairs).forEach((x) => {
      let pair = piecePairs[x];
      
      pairs[x] = {
        matched: false,
        nameRevealed: false,
        valueRevealed: false,
        pair
      };
    });

    setCorrectPairs(pairs)
  }, []);

  return (
    <div className='App'>
      <div className='center'>

        <Board correctPairs={ correctPairs } />
      
      </div>
    </div>
  );
  // const setRevealed = (x, i) => {
  //   if (matched[i]) {
  //     console.log("matched!");
  //     return;
  //   }
  //   else if (revealedStates[i]) {
  //     console.log("revealed!");
  //     return;
  //   }
  //   else if (piecesToUnreveal.length === 1) {
  //     if (checkMatch(i)) {
  //       console.log("match!");
  //       let matchedStates = matched;
  //       matchedStates[i] = true;
  //       setMatched(matchedStates);
        
  //       let states = revealedStates;
  //       states[i] = true;
  //       setRevealedStates(states);
  //       setPiecesToUnreveal([]);
  //       return;
  //     }
  //     else {
  //       console.log("wrong match, revealing and waiting...");
  //       let states = revealedStates;
  //       states[i] = x;
  //       setRevealedStates(states);

  //       rerender();

  //       setPiecesToUnreveal([...piecesToUnreveal, i]);
  //       return;
  //     }
  //   }
  //   else if (piecesToUnreveal.length === 2) {
  //     let states = revealedStates;
  //     states[piecesToUnreveal[0]] = false;
  //     states[piecesToUnreveal[1]] = false;

  //     states[i] = x;
  //     setPiecesToUnreveal([i]);
  //     setRevealedStates(states);
  //     return;
  //   }
  //   else {
  //     let states = revealedStates;
  //     states[i] = x;
  //     setRevealedStates(states);
  //     setPiecesToUnreveal([i]);
  //   }
  // }

  // const shuffleArray = (array) => {
  //   let curId = array.length;
  //   // There remain elements to shuffle
  //   while (0 !== curId) {
  //     // Pick a remaining element
  //     let randId = Math.floor(Math.random() * curId);
  //     curId -= 1;
  //     // Swap it with the current element.
  //     let tmp = array[curId];
  //     array[curId] = array[randId];
  //     array[randId] = tmp;
  //   }
  //   return array;
  // }
  
  // return (
  //   <div className="App">
  //     <div className="center">
  //       <div className="grid">
  //         {
  //           shuffledArray.map((x, j) => {
  //             if (pieces.indexOf(x) !== -1) {
  //               let i = pieces.indexOf(x);
  //               return (
  //                 <Card component={Image} 
  //                   onClick={() => {
  //                     console.log(piecesToUnreveal.length);
  //                   }}
  //                   key={j}
  //                   componentProps={{src: pieces[i], className: "revealed-image"}} 
  //                   isRevealed={revealedStates[i]} 
  //                   setRevealed={(x) => {
  //                     setRevealed(x, i);
  //                   }
  //                 }/>
  //               ); 
  //             }
  //             else {
  //               let i = pieces.length + names.indexOf(x);
                
  //               return (
  //                 <Card component={Div} 
  //                   onClick={() => {
  //                     console.log(piecesToUnreveal.length);
  //                   }}
  //                   key={j}
  //                   componentProps={{text: names[names.indexOf(x)], className: "card-text"}} 
  //                   isRevealed={revealedStates[i]} 
  //                   setRevealed={(x) => {
  //                     setRevealed(x, i);
  //                   }
  //                 }/>
  //               ); 
  //             }
  //           })
  //         }
  //       </div>
  //     </div>
  //     <h1>Vytvoril: Ivan Hrabčák</h1><br/>
  //     <a href="https://github.com/ivanhrabcak/pexeso">Kód tu</a>
  //   </div>
  // );
}

export default App;
