import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { addBatch } from './Store/action/action';
import Bar from './Components/Batches';


const App = () => {
  return (
    <>
      <div className='container  mt-4'>
        <h4 className='text-center'>Add Batch & Bar Information</h4>
      </div>
      <Bar />
      {/* <div className='container  mt-4'>
        <div className='main-container'>
          <div className='batch-number mb-5'>
            <input type = "text" className='py-1 px-2 mt-2 w-75' placeholder='Batch Number' onChange={handleBatch}/>
          </div>
          <div className='batch-info px-4 py-4 mb-4'>
            <div className="batch-sub-header text-start mb-2">Capture Bar Details</div>
            <div className="main-section mb-3">
              <input type="text" className='w-50 mr-1 py-1 px-2' name="bar_value" placeholder='Bar Number' onChange={handleBarValue}/>
              <input type="text" className='mr-1 py-1 px-2' name="bar_weight" placeholder='Bar Weight' onChange={handleBarValue}/>
              <input type="text" className='mr-1 py-1 px-2' name="bar_fitness" placeholder='Bar Fitness' onChange={handleBarValue}/>
            </div>
            <div className='batch-info-footer'>
              <button className='btn btn-success' onClick={barSubmit}>+</button>
              <span>Add Bar</span>
            </div>
          </div>
          <div className='batch-footer'>
              <button className='btn btn-success' onClick={batchSubmit}>+</button>
              <span>Add Batch</span>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default App