
import './App.css';

function App() {
  const arr=["blackbery","android","window","iphone"]
  const ar=["sumsung","HTC","Micromax","Lava"]
  const link=["service","Project","About"]
  return (
    <div className="App">
        <div id='navbar'>
         <h2>LOGOBAKERY</h2>
      
        {link.map((e)=>{
          return <h4>{e}</h4>
        })}
         
         <button>Contact us</button>
         

        </div>
        <div>
          <ul>
            <h1>Mobile Operating system</h1>
            {arr.map((e)=>{
             return <li>{e}</li>
            })}
          </ul>
        </div>
        <div>
          <ul>
            <h1>Mobile Manufacturer</h1>
            {ar.map((e)=>{
             return <li>{e}</li>
            })}
          </ul>
        </div>




    </div>
  );
}

export default App;
