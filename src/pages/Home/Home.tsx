import { useState } from 'react'
import reactLogo from "../../assets/icons/react.svg";
import viteLogo from "/vite.svg";
const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col w-full items-center justify-center gap-3">
        <div className="flex flex-col items-center">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
  )
}

export default Home