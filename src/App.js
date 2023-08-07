//import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import {ClickHandler} from './Components/ClickHandler'
import { FunctionMessage } from './Components/FunctionMessage';
import {Greet} from './Components/Greet';
import { Hello } from './Components/Hello';
import { Message } from './Components/Message';
import {Welcome} from './Components/Welcome';
import { UserGreetings } from './Components/UserGreetings';
import { ParentComponent } from './Components/ParentComponent';
import { NamedList } from './Components/NamedList.';
import { StyleSheets } from './Components/StyleSheets';
import { InLine } from './Components/InLine';
import './myAppStyles.css'
import styles from './myAppStyles.module.css'
import { Form } from './Components/Form';
import { FormDetail } from './Components/FormDetail';
import { FragmentDemo } from './Components/FragmentDemo';
import { Table } from './Components/Table';
import { FragmentList } from './Components/FragmentList';
//import {LifeCycleA} from './Components/LifeCycleA';
import PureComponenets from './Components/PureComponenets';
import ParentComp from './Components/ParentComp';
import { RefDemo } from './Components/RefDemo';
import FocusInput from './Components/FocusInput';
import FRParentInput from './Components/FRParentInput';
import ErrorBoundary from './Components/ErrorBoundary';
import { Hero } from './Components/Hero';
import { PortalDemo } from './Components/PortalDemo';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import ClickCounter2 from './Components/ClickCounter2';
import HoverCounter2 from './Components/HoverCounter2';
import User from './Components/User';
import Counter2 from './Components/Counter2';
import ComponenetC from './Components/ComponenetC';
import { UserProvider } from './Components/UserContex';

function App() {
  return (
    <div className="App">
     {/* <h1>Welcome to cgg</h1> */}
     {/* <Greet name="React" designation="SSD"> 
     <p>This is Children Props</p>
     </Greet>
     <Greet name="Angular" designation="TL">
      <button>Active</button>
     </Greet>
     <Greet name="Vue" designation="SD"/> 
     <Welcome name="React" designation="SSD">
     <p>This is Children Props</p>
     </Welcome>
     <Welcome  name="Angular" designation="TL"></Welcome> */}
     {/* <Welcome name="Vue" designation="SD"></Welcome> */}
     {/* <Hello/> */}
     {/* <Message/> */}
    {/* <FunctionMessage/> */}
    {/* <Counter/>
    <ClickHandler/> */}
    {/* <UserGreetings/>
    <ParentComponent/> */}
    {/* <NamedList/> */}
    {/* <StyleSheets primary={false}/> */}
    {/* <InLine/>
    <h1 className='error'>Error</h1>
    <h1 className={styles.success}>Success</h1> */}
    {/* <Form/> */}
    {/* <FormDetail/> */}
    {/* <FragmentDemo/> */}
    {/* <Table/> */}
    {/* <FragmentList/> */}
    {/* <LifeCycleA/> */}
    {/* <PureComponenets/> */}
    {/* <ParentComp /> */}
    {/* <RefDemo/> */}
    {/* <FocusInput/> */}
    {/* <FRParentInput/> */}
    {/* <ErrorBoundary>
      <Hero heroName='Batman'/>
    </ErrorBoundary>
    <ErrorBoundary>
      <Hero heroName='Superman'/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName='joker'/>
    </ErrorBoundary> */}
    {/* <PortalDemo/> */}
    {/* <ClickCounter name='CGG'/> */}
    {/* <HoverCounter name='xyz'/> */}
    {/* <ClickCounter2/>
    <HoverCounter2/>
    <User render={(isLoggedIn)=>isLoggedIn?'CGG':'Guest'}/> */}
    {/* <Counter2>
    {(count,incrementCount)=>(
      <ClickCounter2 count={count}
      incrementCount={incrementCount}/>
  )}
    </Counter2>

<Counter2>
{(count,incrementCount)=>(
      <HoverCounter2 count={count}
      incrementCount={incrementCount}/>
      

  )}
</Counter2> */}
<UserProvider value='CGG'>
<ComponenetC/>
</UserProvider>



     </div>
  );
}

export default App;
