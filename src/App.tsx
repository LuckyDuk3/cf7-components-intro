// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";

import Layout from "./components/Layout.tsx";
import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import CounterWIthMoreStates from "./components/CounterWIthMoreStates.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
function App() {

  return (
    <>
      <Layout>
    {/*<ClassComponent/>*/}
    {/*    <FunctionalComponent/>*/}
    {/*    <ArrowFunctionalComponent/>*/}
    {/*    <ArrowFunctionalComponentWithProps title="Is Arrow Functional Component with Props!"/>*/}
    {/*    <ArrowFunctionalComponentWithPropsType*/}
    {/*        title="Is Arrow Functional Component with Props!"*/}
    {/*        description="this is a description"*/}
    {/*    />*/}


    {/*    <h1 className="text-center text-2xl font-bold">This is a heading1 title</h1>*/}
    {/*    <FunctionalComponent/>*/}
    {/*    <ClassComponentWithState/>*/}
    {/*    <FunctionalComponentWithState/>*/}
    {/*      <Counter/>*/}
    {/*      <NameChanger/>*/}
    {/*    <CounterWIthMoreStates/>*/}
    {/*    <CounterAdvanced/>*/}
    {/*    <CounterWithCustomHook/>*/}
    {/*    <CounterAdvancedWithCustomHook/>*/}
        <CounterWithReducer/>

      </Layout>

    </>
  )
}

export default App
