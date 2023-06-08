
import { useState } from 'react';

export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState( initialValue );

    const onIncrement = ( value = 1 ) => {
        setCounter( counter + value );
    }

    const onDecrement = ( value = 1 ) => {
        setCounter( counter - value );
    }

    const onReset = () => {
        setCounter( initialValue );
    }
    
    return {
        counter,
        onIncrement,
        onDecrement,
        onReset
    }
}