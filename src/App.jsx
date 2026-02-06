import { useState } from 'react'
import './App.css'

function Square({value ,onSquareclick}){
 
    return  (  
        <button className='square' onClick={onSquareclick}>{value}</button>
    )

}


 export default function Board() {
    const [squares,setSquares]=useState(Array(9).fill(null));
    const [xIsnext,setXIsnext]=useState(true);
  
  const winner=calculatewinner(squares);
         let gameStatus;
         if(winner){
            gameStatus= "winner:"+winner;
         } else{
            gameStatus="next player:"+(xIsnext ? "X":"O");
         }
  
  
    function handleclick (i){
        if(squares[i] ||calculatewinner(squares)){
            return;
        }
        
const nextSquares=squares.slice();
if(xIsnext){
nextSquares[i]="X";
}
else{
    nextSquares[i]="O";
}

setSquares(nextSquares);
setXIsnext(!xIsnext);
    }

    return (
    <>
     <div className="gameStatus">{gameStatus}</div>
    <div className='board-row'>
        <Square value={squares[0]} onSquareclick={()=> handleclick(0)} />
        <Square value={squares[1]} onSquareclick={()=> handleclick(1)}/>
        <Square value={squares[2]}onSquareclick={()=> handleclick(2)}/>
    </div>

    <div className='board-row'>
        <Square value={squares[3]}onSquareclick={()=> handleclick(3)}/>
        <Square value={squares[4]}onSquareclick={()=> handleclick(4)}/>
        <Square value={squares[5]}onSquareclick={()=> handleclick(5)}/>
    </div>

    <div className='board-row'>
        <Square value={squares[6]}onSquareclick={()=> handleclick(6)}/>
        <Square value={squares[7]}onSquareclick={()=> handleclick(7)}/>
        <Square value={squares[8]}onSquareclick={()=> handleclick(8)}/>
    </div>
       

    </>
    );


    function calculatewinner(squares){
        const lines =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
        ];
        for(let i=0;i<lines.length;i++)
        {
            const[a,b,c]=lines[i];
            if(squares[a]&& squares[a]===squares[b]&& squares[b]===squares[c]){
                return squares[a];
            }

        }
        return null;
    }


}
