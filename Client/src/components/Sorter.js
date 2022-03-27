import React from 'react';

const Sorter = (taskList) => {
    
    const clearCompleted = () => {
      };

    return (
        <div className='card'>
                <div>
                <p>items left</p>
                </div>
                <div>
                <button>All</button>
                <button>Active</button>
                <button>Complete</button>
                </div>
                <div>
                <button onClick={clearCompleted}>Clear Completed</button>
                </div>
            </div>
    );
};

export default Sorter;