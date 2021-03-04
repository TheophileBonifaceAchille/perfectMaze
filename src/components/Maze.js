/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'

const Maze = () => {

   const [array, setArray] = useState([])



   useEffect(() => {
    NUMBER_ROWS = 5
    NUMBER_COLUMS = 5
      let board = []
  
        for (let i = 0; i < NUMBER_ROWS; i++){
        let innerArray = []
            for (let j = 0; j < NUMBER_COLUMS.lenght; j++) {
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
        }, [])
  
        console.log(array) 
        
    return (        
        <table className='position-relative m-5' >
            <tbody className='position-absolute'>
                {array.map((item, index) => (
                    <tr key = {index}>
                        {item.map((innerItem, innerIndex) => (
                        <td key = {innerIndex} className='border border-primary p-3'>
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