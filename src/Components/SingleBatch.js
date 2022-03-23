import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addBar,addBatchValue,addBarValue,addBarFitness,deleteBatch,deleteBar} from '../Store/action/action';

const SingleBatch = ({batch,batchIndex}) => {
  const [batchNo, setBatchNo] = useState('');
  
  const val = useSelector(state => state.add);
  const dispatch = useDispatch();
  
  const submitBar = () => {
    dispatch(addBar(batchIndex))
  }
  const handleBatch = (e) => {
    dispatch(addBatchValue(e.target.value,batchIndex));
  }
  const handleBarValue = (e,barIndex) => {
    dispatch(addBarValue(e.target.value,batchIndex,barIndex));

  }
  // const handleBarWeight = (e,barIndex) => {
  //   dispatch(addBarWeight(e.target.value,batchIndex,barIndex));
  // }
  const handleBarFitness = (e,barIndex) => {
    dispatch(addBarFitness(e.target.value,batchIndex,barIndex));
  }

  const handleBatchDelete = () => {
    console.log('batch',batchIndex);
    dispatch(deleteBatch(batchIndex))
  }
  const handleBarDelete = (barIndex) => {
    console.log('jhnioklk');
    console.log('bar',batchIndex,barIndex);
    dispatch(deleteBar(batchIndex,barIndex))
  }
  return (
    <div className='container mt-4'>
        <div className='main-container'>
          <div className='batch-number mb-5'>
            <input type = "text" className='p-1 mt-2 w-75' onChange={handleBatch} placeholder='Batch Number' />
            <button onClick={handleBatchDelete}>Delete</button>
          </div>
          
          <div className='batch-info px-4 py-4 mb-4'>
            <div className="batch-sub-header text-start mb-2">Capture Bar Details</div>
            {batch?.bars?.map((bar,barIndex) => (
            <div className="main-section mb-3">
              <input type="text" className='w-50 mr-1' placeholder="Bar Value" onChange={(e) => handleBarValue(e,barIndex)}/>
              <input type="text" className='mr-1' 
              placeholder="Bar Fitness"
              onChange={(e) => handleBarFitness(e,barIndex)}
              />
              <input type="text" className='mr-1' 
              // onChange={(e) => handleBarWeight(e,barIndex)}
              />
              <button onClick={() => handleBarDelete(barIndex)}>DeleteBar</button>
            </div>))}
            <div className='batch-info-footer'>
              <button className='btn btn-success' onClick={submitBar}>+</button>
              <span>Add Bar</span>
            </div>
          </div>
        
        </div>
      </div>
  )
}

export default SingleBatch