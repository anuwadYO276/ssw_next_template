import { useState } from 'react';

export default function MyComponent() {
  const [helloMessage, setHelloMessage] = useState('Getting hello data, please wait...');
  const [goodbyeMessage, setGoodbyeMessage] = useState('Getting goodbye data, please wait...');

  const getHelloData = async () => {
    try {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setHelloMessage(data.message);
    } catch (error) {
      setHelloMessage('Error fetching hello data');
    }
  };

  const getGoodbyeData = async () => {
    try {
      const response = await fetch('/api/goodbye');
      const data = await response.json();
      setGoodbyeMessage(data.message);
    } catch (error) {
      setGoodbyeMessage('Error fetching goodbye data');
    }
  };

  return (
    <div>
      <div>
        <div>{helloMessage}</div>
        <button style={{ color: 'orange' }} onClick={getHelloData}>
          Get Hello Data
        </button>
      </div>
      <div>
        <div>{goodbyeMessage}</div>
        <button style={{ color: 'blue' }} onClick={getGoodbyeData}>
          Get Goodbye Data
        </button>
      </div>
    </div>
  );
}
