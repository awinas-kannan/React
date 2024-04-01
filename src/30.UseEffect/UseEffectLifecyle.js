import React, { useState, useEffect } from 'react';

function UseEffectLifeCycle() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        alert('Component mounted');

        // Cleanup function (componentWillUnmount equivalent)
        return () => {
            alert('Component will unmount');
        };
    }, []); // Empty dependency array means this effect runs only once (on mount)

    useEffect(() => {
        alert('Component updated');
    }, [count]); // Effect runs when count changes

    return (
        <div>
             {alert('inside return')}
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}

export default UseEffectLifeCycle;