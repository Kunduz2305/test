import { Card } from "./components/Card";
import pic from './jk.png'

const data = [
  {
    title:'Physical Health',
    color: '#22356F'
  },
  {
    title:'Mental Health',
    color: '#0052C1'
  },
  {
    title:'Nutrition',
    color: null,
    img: pic
  },
  {
    title:'Gymnastics',
    color: '#62D0DF'
  },
  {
    title:'Crossfit',
    color: '#DEE1FF'
  },
  {
    title:'Aerobics',
    color: '#8F00FF'
  },
]

function App() {
  return (
    <div className="App">
       {
        data.map((el,id) => {
          return <Card data={el} key={id} />
        })
       }
    </div>
  );
}

export default App;