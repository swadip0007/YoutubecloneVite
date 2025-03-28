
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

const cardItems = [
  { id: 1, title: 'Card 1', content: 'Content for card 1' },
  { id: 2, title: 'Card 2', content: 'Content for card 2' },
  { id: 3, title: 'Card 3', content: 'Content for card 3' },
  { id: 4, title: 'Card 4', content: 'Content for card 4' },
  { id: 5, title: 'Card 5', content: 'Content for card 5' },
  { id: 6, title: 'Card 6', content: 'Content for card 6' },
  { id: 7, title: 'Card 7', content: 'Content for card 7' },
  { id: 8, title: 'Card 8', content: 'Content for card 8' },
  { id: 9, title: 'Card 9', content: 'Content for card 9' },
  { id: 10, title: 'Card 10', content: 'Content for card 10' },
  { id: 11, title: 'Card 11', content: 'Content for card 11' },
  { id: 12, title: 'Card 12', content: 'Content for card 12' },
  
];



function App() {

  return (
    <>
    <Header/>
   <div className='flex'>
    <Sidebar/>
    <div className='grid grid-flow-col  grid-rows-3 px-20 py-6 gap-5'>
      {cardItems.map((item) => (
          <Card key={item.id} title={item.title} content={item.content} />
        ))}
        </div>
    
   </div>

    </>
  ) 
}

export default App
