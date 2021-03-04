import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

const Home = (x, y) => {

  x=10
  y=10

  const [valuesX, setValuesX] = useState(x);
  const [valuesY, setValuesY] = useState(y);

  const handleOnClick = (e) => {
    console.log(`
    ValueX: ${valuesX}
    ValueY: ${valuesY}
    `);
    e.preventDefault();
  }

  return (        
            <form className="m-5 center">
              <div className="mb-3">
                <label htmlFor="casseVertical" className="form-label">Case vértical</label>
                <input type="casse" className="form-control" id="casseVertical" aria-describedby="casseVertical" value={valuesX} onChange={e => setValuesX(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="casseHorizontal" className="form-label">Casse horizontal</label>
                <input type="casse" className="form-control" id="casseHorizontal" value={valuesY} onChange={e => setValuesY(e.target.value)} />
              </div>
              <NavLink to="/maze"> 
                <button type="submit" className="btn btn-primary mt-3" onSubmit={handleOnClick}>Submit</button>
              </NavLink>
            </form>
    )
}

export default Home;