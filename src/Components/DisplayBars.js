import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const DisplayBars = () => {
  const BatchData = useSelector(state => state.add.batches);
  return (
      <>
       {BatchData?.map(batch => (
           <>
            <div>Batch: {batch.batchNo}</div>
            <div>
                {batch.bars.map((bbItem,index) => (
                    <div>
                        <span>{`Barindex${index}: ${bbItem.barNo}`}</span>
                        <span>{`FitnessValue${index}: ${bbItem.barfitness}`}</span>
                    </div>
                )
                )}
            </div>
           </>
       ))}
     </>
  )
}

export default DisplayBars