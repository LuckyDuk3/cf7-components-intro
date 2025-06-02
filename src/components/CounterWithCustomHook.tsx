import CounterButton from "./CounterButton.tsx";
import {useCounter} from "../hooks/useCounter.ts";

const CounterWithCustomHook = () => {

  // custom hook function
  const { count, increase, decrease, reset } = useCounter();

  return (
    <>
      <div className="space-y-4 text-2xl pt-12">
        <h1 className="text-center">Count is {count}</h1>
        <div className="text-center space-x-4">
          <CounterButton onClick={increase}  label="Increace"/>
          <CounterButton onClick={decrease} disabled={count === 0} label="Decrease"/>
          <CounterButton onClick={reset} disabled={count === 0} label="Reset" addClass="bg-cf-dark-red"/>

        </div>
      </div>
      {/*<p className="text-center pt-8" >Last Changer: <strong>{state.lastAction || "-"}</strong>  at {state.time || "-"}</p>*/}
    </>
  )
}

export default CounterWithCustomHook;