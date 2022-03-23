

export const addBatch = () => {
    return {
        type: 'ADD_BATCH',
    }
}

export const addBar = (payload) => {
    return {
        type: 'ADD_BAR',
        payload
    }
}

export const addBatchValue = (value,index) => {
    // console.log('payload',value,index)
    return {
        type: 'ADD_BATCH_VALUE',
        payload: {
            value,
            index,
        }
    }
}

export const addBarValue = (value,batchindex,barindex) => {
    return {
        type: 'ADD_BAR_VALUE',
        payload: {
            value,
            batchindex,
            barindex,
        }
    }
}

export const addBarFitness = (value,batchindex,barindex) => {
    return {
        type: 'ADD_BAR_FITNESS',
        payload: {
            value,
            batchindex,
            barindex,
        }
    }
}

export const deleteBatch = (batchIndex) => {
    return {
        type: 'DELETE_BATCH',
        payload: {
            batchIndex,
        }
    }
}

export const deleteBar = (batchIndex,barIndex) => {
    return {
        type: 'DELETE_BAR',
        payload: {
            batchIndex,
            barIndex,
        }
    }
}

// export const addBarWeight = (value,batchindex,barindex) => {
//     return {
//         type: 'ADD_BAR_WEIGHT',
//         payload: {
//             value,
//             batchindex,
//             barindex,
//         }
//     }
// }