import React from 'react';
import OperationsView from './OperationsView';
import ResultsView from './ResultsView';


export default function Calculator(){
    return(
        <div className='bg-[#305478] rounded-xl w-full max-w-lg  mx-auto'>
            <ResultsView />

            <OperationsView />
        </div>
    )
}