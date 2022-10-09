import React from 'react';

export default function OperationsView(){

    const numbers = [0,1,2,3,4,5,6,7,8,9];

    const numberElements = numbers.map(number => <li>{number}</li>)

    return(
        < div className = 'bg-[#ffffff] w-full p-8 rounded-br-xl rounded-bl-xl text-[#dc6666]' >
            Operations Componet

            {numberElements}            
        </div>
    )
}