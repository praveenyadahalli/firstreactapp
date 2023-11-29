import logo from './logo.svg';
import './App.css';

let name="Praveen";
function MyButton() {
  return (
      <button>This is button</button>
  );
}
 function FunctionTest(){
  return(
    <h1>This is second function</h1>
  );
 }
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <FunctionTest/>
    </div>
  );
}