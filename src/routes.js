import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/home';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>
);

export default App;
