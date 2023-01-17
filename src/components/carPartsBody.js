import React, { useEffect, useState } from 'react'
import { Row, Container } from 'react-bootstrap';
import CarPartsElement from './carPartsElement';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase-config';

import '../css/carPartsBody.css';

function CarPartsBody() {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "CarParts"); 

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);
  
  return (
    <Container>
      <Row className='justify-content-md-center'>
      {postLists.map((post) => {
          const imageUrlsArr = post.imageUrls;
          return <CarPartsElement key={post.id} title={post.title} text={post.text} imageUrls={imageUrlsArr} /> 
        })}
      </Row>
    </Container>

  );

};

export default CarPartsBody;