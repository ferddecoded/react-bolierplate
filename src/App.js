import React, { useState } from 'react'
import { hot } from 'react-hot-loader'

const Warning = React.lazy(() => import('./Warning'))

const App = () => {
  // throw new Error("This is an error message that bubles to the error boundary");
  const [count, setCount] = useState(0)
  return (
    <main>
      <h1>Hello World!!</h1>
      <img alt="logo" src="./logo.png" />
      <h2 className={count > 10 ? 'warning' : null}>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count > 10 ? (
        <React.Suspense fallback={null}>
          <Warning />
        </React.Suspense>
      ) : null}
    </main>
  )
}

export default hot(module)(App)
