// src/pages/index.jsx
import { useState } from 'react';
import Link from 'next/link';
import Heade from '../components/headers/header';


function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + alert("AAAAAAAAAAAAAAAAA"));
  }

  return (
  
    <div className='body'>
      
   


      </div>
    
  );
}
