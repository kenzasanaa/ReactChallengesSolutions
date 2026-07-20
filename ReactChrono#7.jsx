import { FaPlay, FaStop, FaPause  } from "react-icons/fa";
import { useState, useEffect, useRef } from "react"; 

export default function App() {
const [time, setTime] = useState(0); 
const [isRunning, setIsRunning] = useState(false);
const intervalRef = useRef(null);

function handleToggle() {
  setIsRunning((prev) => !prev);  
}
function handleStop (){
  setTime(0);
  setIsRunning(false);
}

function formatTime(tenths) {
  const minutes = Math.floor(tenths / 600);
  const seconds = Math.floor((tenths % 600) / 10);
  const remainingTenths = tenths % 10;
  
  const pad = (num) => num.toString().padStart(2, "0");
  
  return `${pad(minutes)}:${pad(seconds)}.${remainingTenths}`;
}

useEffect(() => {
  if (isRunning) {
    intervalRef.current = setInterval(() => {
      setTime((q) => q + 1);
    }, 100);
  }

  return () => {
    clearInterval(intervalRef.current);
  };
}, [isRunning]);

  return (
    <main className="flex flex-col justify-center items-center min-h-dvh bg-gray-100 p-4">
      <div className="flex flex-col gap-8 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center">Chrono</h1>

        <div className="rounded-2xl shadow-2xl bg-gray-200 p-12 flex flex-col gap-12">
          <div className="text-center text-4xl font-mono"> {formatTime(time)} </div>

          <div className="flex gap-8 justify-center">
            <button className="cursor-pointer hover:scale-110 transition-transform"
              onClick={handleToggle}
              aria-label={isRunning ? "Pause" : "Play"}
            >
              {isRunning ? <FaPause  className="size-8" /> : <FaPlay  className="size-8"/>}
            </button>
            <button className="cursor-pointer hover:scale-110 transition-transform"
              onClick={handleStop}
              aria-label="Stop"
            >
              <FaStop className="size-8" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
