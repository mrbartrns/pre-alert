import { useState } from 'react';
import LocalDateTime from '@utils/LocalDateTime';
import { useInterval } from '@hooks/useInterval';

const App = () => {
  const [count, setCount] = useState<LocalDateTime>(
    new LocalDateTime(Date.now()),
  );

  const currentTimeToString = count.formattedTime;

  useInterval(() => {
    setCount(() => new LocalDateTime(Date.now()));
  }, 1000);

  return (
    <div className="text-4xl font-bold text-gray-500">
      <h1>{currentTimeToString}</h1>
    </div>
  );
};

export default App;
