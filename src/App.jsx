import { useState } from   "react";
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";
import "./components/style.css";

function App() {
  const [flag,setflag]= useState(false);
  console.log(flag)
  return (

    <div>
      <h1>Mini Book Store</h1>

      <button onClick={()=>setflag(!flag)}data-testid="toggle-btn" id="btn">
        {flag ? "Show Fictional Books" : "Show Non-Fiction Books"}
      </button>

      <div data-testid="conditional-container">
       
        {!flag ? <Fiction  /> :<NonFiction />}
      </div>
    </div>
  );
}

export default App;
