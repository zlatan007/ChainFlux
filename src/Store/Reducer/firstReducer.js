const randomIdGenerator = () => Math.floor((Math.random() * 100) + 1);

const defaultBatch = {
    batchId: randomIdGenerator(),
    batchNo: "",
    bars: [{
        barId: randomIdGenerator(),
        barNo: "",
        barwt: "",
        barfiness: "",
    }]
}
const defaultBar = {
    barId: randomIdGenerator(),
    barNo: "",
    barwt: "",
    barfiness: "",
}

const initialState = {
    batches: [{
        batchId: randomIdGenerator(),
        batchNo: "",
        bars: [{
            barId: randomIdGenerator(),
            barNo: "",
            barwt: "",
            barfiness: "",
        }]
    }],
}

const firstReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BATCH':
            const newBatch = JSON.parse(JSON.stringify(defaultBatch))
            newBatch.batchId = randomIdGenerator();
            return {...state, batches: [...state.batches,{...newBatch}]}
        case 'ADD_BAR':
            const newBar = JSON.parse(JSON.stringify(defaultBar))
            newBar.barId = randomIdGenerator();
            const temp = [...state.batches ];
            temp[action.payload].bars.push(newBar);
            return {...state,batches: temp} 
        case 'ADD_BATCH_VALUE':
            const batchValue = [...state.batches];
            batchValue[action.payload.index].batchNo = action.payload.value;
            return {...state, batches: batchValue}
        case 'ADD_BAR_VALUE':
            const { value,batchindex,barindex } = action.payload;
            let barValue = [...state.batches ];
            barValue[action.payload.batchindex].bars[action.payload.barindex].barNo = action.payload.value;
            return {...state, batches: barValue}
        case 'ADD_BAR_FITNESS':
            const { value:fitness ,batchindex: fitbatchindex,barindex: fitbarindex } = action.payload;
            let fitnessValue = [...state.batches ];
            fitnessValue[fitbatchindex].bars[fitbarindex].barfitness = fitness;
            return {...state, batches: fitnessValue}
        case 'DELETE_BATCH':
            const filteredBatch = state.batches.filter((d,index) => index !== action.payload.batchIndex)
            return {...state, batches: filteredBatch}
        case 'DELETE_BAR':
            const copybatch = [...state.batches];
            const copyfiltered = {...copybatch[action.payload.batchIndex]};
            const barCopy = [...copyfiltered.bars];
            barCopy.splice(action.payload.barIndex,1);
            copyfiltered.bars = barCopy;
            copybatch[action.payload.batchIndex] = copyfiltered;
            return {...state,batches: copybatch}

        default:
            return state;
    }
}

export default firstReducer;