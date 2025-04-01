
import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import axios from "axios";

// const cardItems = [
//   { id: 1, title: 'Card 1', content: 'Content for card 1' },
//   { id: 2, title: 'Card 2', content: 'Content for card 2' },
//   { id: 3, title: 'Card 3', content: 'Content for card 3' },
//   { id: 4, title: 'Card 4', content: 'Content for card 4' },
//   { id: 5, title: 'Card 5', content: 'Content for card 5' },
//   { id: 6, title: 'Card 6', content: 'Content for card 6' },
//   { id: 7, title: 'Card 7', content: 'Content for card 7' },
//   { id: 8, title: 'Card 8', content: 'Content for card 8' },
//   { id: 9, title: 'Card 9', content: 'Content for card 9' },
//   { id: 10, title: 'Card 10', content: 'Content for card 10' },
//   { id: 11, title: 'Card 11', content: 'Content for card 11' },
//   { id: 12, title: 'Card 12', content: 'Content for card 12' },
  
// ];

export type TproductResponse = IproductObj[]

export interface  IproductObj {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export interface Rating {
  rate: number
  count: number
}




function App() {
  const [products, setProducts] = useState<TproductResponse>([]);
  const fetchApi = async () => {
    const res = await axios.get('https://fakestoreapi.com/products/');
    setProducts(res.data);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
    <Header/>
   <div className='flex'>
    <Sidebar/>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4'>
      {products.map((item) => (
          <Card key={item.id}
          image={item.image}
          name={item?.title}
          description={item?.description}
          rating={item.rating.rate} />
        ))}
        </div>
    
   </div>

    </>
  ) 
}

export default App
