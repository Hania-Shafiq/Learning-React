
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';

function App() {
return (
<>
<Navbar title="TwistText" aboutText="About Twist Text"/>

<div class='container'> <TextForm heading="Enter the text to analyze"/></div>

</>
);

}

export default App;
