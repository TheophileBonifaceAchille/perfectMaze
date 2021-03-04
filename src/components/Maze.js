import React, { useEffect, useState } from 'react'

const Maze = (props) => {

  const [array, setArray] = useState([])

  const NUMBER_ROW = props.x
  const NUMBER_COL = props.y

    useEffect(() => {
      
    let board = []
        
    for (let i = 0; i < NUMBER_ROW; i++) {
      let innerArray = []
      for (let j = 0; j < NUMBER_COL; j++) {
        let obj = {}
        obj['x'] = i
        obj['y'] = j
        let temp = []
        innerArray.push(obj)
        temp.push(obj)
      }
      board.push(innerArray)
    }
    setArray(board)
    }, [NUMBER_ROW, NUMBER_COL])

  return (
    <>
      <button className="btn btn-primary m-3" onClick={() => props.back(0)}>BACK</button>
      <table className="position-relative m-5">
        <tbody className="position-absolute">
          {array.map((item, index) => (
            <tr key={index}>
              {item.map((innerItem, innerIndex) => (
                <td key={innerIndex} className="border border-primary p-3">
                  {innerItem.state}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Maze