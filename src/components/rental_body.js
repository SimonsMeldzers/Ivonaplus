import React, { useEffect, useState } from 'react'
import { getDocs, addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase-config';
import RentalCar from './rental_car';

import '../css/rental_body.css'

function RentalBody() {
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "CarRental")

    useEffect(() => {
        const getPosts = async () => {
          const data = await getDocs(postsCollectionRef);
          setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getPosts();
      }, []);

 

  return (
    <div className='rental-body'>
        {postLists.map((post) => {
            return <RentalCar key={post.id} id={post.id} imageUrl={post.url} name={post.name} year={post.year} seats={post.seats} doors={post.doors} gearBox={post.gearBox} AC={post.AC} price={post.price} available={post.available}/>
        })}
    </div>
  )
}

export default RentalBody;