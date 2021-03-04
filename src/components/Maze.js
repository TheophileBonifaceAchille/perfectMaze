import React, { useEffect, useState } from 'react'

const Maze = () => {

    const [array, setArray] = useState([])
    
    const NUMBER_ROW = 5
    const NUMBER_COL = 5

    useEffect(() => {

        let board = []

        /* const removeWall = (row, col) => {
            const cell = '#r' + row + 'c' + col
            
            if (row === 1) {
                 if (col === NUMBER_COL)
                     return;
                 cell.css("border-right-style", "hidden")
             }
             else if (col === NUMBER_COL) {
                 cell.css("border-top-style", "hidden")
             }
             else {
                 if (Math.random() >= 0.5) {
                     cell.css("border-top-style", "hidden")
                 }
                 else {
                     cell.css("border-right-style", "hidden")
                 }
             }
         } */
  
            for (let i = 0; i < NUMBER_ROW; i++) {
                let innerArray = []
                for (let j = 0; j < NUMBER_COL; j++) {
                    let obj = {}
                    obj['x'] = i
                    obj['y'] = j
                    let temp = []
                    innerArray.push(obj)
                    temp.push(obj)
                };
                board.push(innerArray);
            }
            setArray(board)
        }, [NUMBER_ROW, NUMBER_COL]
    )
  
    console.log(array)
        
        return (
            <table className='position-relative m-5' >
                <tbody className='position-absolute'>
                    {array.map((item, index) => (
                        <tr key={index}>
                            {item.map((innerItem, innerIndex) => (
                                <td key={innerIndex} className='border border-primary p-3'>
                                    {innerItem.state}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

export default Maze;