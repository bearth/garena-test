import React from 'react';
import ReactDOM from 'react-dom';

import Section2 from './Section2';
import Section3 from './Section3';

const App = () => {
    return (
        <div>
            <Section2 />
            <Section3 />
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
