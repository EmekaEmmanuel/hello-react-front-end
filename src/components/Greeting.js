import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreets } from '../redux/greet/greetSlice'; 

function Greeting() {

  // const myMissions = useSelector((state) => state.mission.missions);
  const myGreets = useSelector((state) => state.greet.greets)
  const dispatch = useDispatch();

  useEffect(() => {
    let active = true;
    (async () => {
      if (active && myGreets.length === 0) {
        dispatch(fetchGreets());
      }
    })();
    return () => {
      active = false;
    };
  }, [dispatch, myGreets]);

  return (
    <div>
      <div>
        <h1>Greeting Component</h1>
        
      </div>
      <div>
        {myGreets?.map((myGreet) => (
          <p key={myGreet.id}>{myGreet.message}</p>
        ))}
      </div>
    </div>
  )
}

export default Greeting