import { useRef, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Card from "./Card";
import Div from "./Div";
import Image from "./Image";

const Board = ({ correctPairs }) => {
    const [pairs, setPairs] = useState(correctPairs);
    const [displayingPairs, setDisplayingPairs] = useState([]);
    const [playerPairs, setPlayerPairs] = useState({});

    const [isFirstRevealingPhase, setFirstRevealingPhase] = useState(true);

    const random = (min, max) => {
        let num = Math.random() * (max - min) + min;
    
        return Math.round(num);
    };

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    useEffect(() => {
        let pairsLength = Object.keys(pairs).length * 2
        let indicesUnoccupied = [...Array(pairsLength).keys()];

        let newPairs = correctPairs;
        Object.keys(correctPairs).forEach((x) => {
            let nameIndex = indicesUnoccupied[random(0, indicesUnoccupied.length - 1)];
            indicesUnoccupied = indicesUnoccupied.filter((x) => x !== nameIndex);

            let valueIndex = indicesUnoccupied[random(0, indicesUnoccupied.length - 1)];
            indicesUnoccupied = indicesUnoccupied.filter((x) => x !== valueIndex);
            
            newPairs[x] = { ...newPairs[x], nameIndex, valueIndex };
        });

        setPairs(newPairs);

        let pairsDisplayed = Array(pairsLength);
        for (let name of Object.keys(pairs)) {
            let pair = newPairs[name];
            // set name
            pairsDisplayed[pair.nameIndex] = { text: name, type: 'name', revealed: true };

            // set value
            pairsDisplayed[pair.valueIndex] = { image: pair.pair, type: 'image', revealed: true }; 
        }


        setDisplayingPairs(pairsDisplayed);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setDisplayingPairs, setPairs]);

    useEffect(() => {
        if (isFirstRevealingPhase && displayingPairs.length !== 0) {
            setTimeout(() => {
                let i = 0;
                let piecesToUnreveal = displayingPairs[i];
                while (piecesToUnreveal.revealed) {
                    piecesToUnreveal = displayingPairs[++i];

                    if (piecesToUnreveal === undefined) {
                        console.log("end of revealing phase");
                        setFirstRevealingPhase(false);
                        return;
                    }
                }

                let pairsDisplayed = [...displayingPairs];
                pairsDisplayed[i].revealed = false;

                console.log("hiding " + i);
                
                setDisplayingPairs(pairsDisplayed);
            }, 500);
        }
        else {
            console.log("bad conditions");
            console.log({ displayingPairs, isFirstRevealingPhase });
        }

    }, [displayingPairs, isFirstRevealingPhase]);

    return (
        <div className='grid'>
            {
                displayingPairs.map((x, i) => {
                    const isImage = x.type === 'image';
                    return (
                        <Card 
                            key={i}
                            component={ isImage ? Image : Div } 
                            componentProps={ isImage ? { src: x.image, className: 'revealed-image' } : { text: x.text } }
                            toggleRevealed={() => {
                                let pairsDisplayed = [...displayingPairs]; // by value instead of by-reference
                                pairsDisplayed[i].revealed = !pairsDisplayed[i].revealed;

                                setDisplayingPairs(pairsDisplayed);
                            }}
                            isRevealed={() => displayingPairs[i].revealed } />   
                    )
                })
            }
        </div>
    );
}

export default Board;