import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import SingleBar from './SingleBatch';
import { addBatch } from '../Store/action/action';
import DisplayBars from './DisplayBars';


const Batches = () => {
  const BatchData = useSelector(state => state.add.batches);
  const dispatch = useDispatch();
  const submitBatch = (batchNo) => {
    dispatch(addBatch());
  }
  return (
    <>
    {(
        BatchData && BatchData.length > 0) && BatchData.map((batch,index) => (
            <SingleBar batch={batch} batchIndex = {index} key={batch.batchId} />
        ))
    }
        <div className='container'>
          <DisplayBars />
        </div>
        <div className='container'>
          <button className='btn btn-success' onClick={submitBatch}>+</button>
          <span>Add Batch</span>
        </div>
    </>
  )
}

export default Batches;