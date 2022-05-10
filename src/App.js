import './App.css';

import OldSignupForm from './components/SignupForm/SignupForm';
import OldColorPicker from './components/ColorPicker/ColorPicker';
import OldCounter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <OldCounter />
      <OldSignupForm />
      <OldColorPicker options={colorPickerOptions} />
    </div>
  );
}

export default App;

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];
