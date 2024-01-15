import React, { useEffect } from 'react';
import { requestPastries } from '../store/pastriesSlices';
import { useDispatch, useSelector } from 'react-redux';


function HomePage() {
  const dispatch = useDispatch();
  const { pastries } = useSelector(store => store.pastriesSliceReducer);

  useEffect(()=> {
    dispatch(requestPastries())
  }, [])
  return (
    <>     

      <h1>Home</h1>
      
      <ul>
        {pastries.length>0 && pastries.map((pastrie, index)=><li key={index}>{pastrie.name}</li>)}
      </ul>

    </>
  )
}

export default HomePage
  