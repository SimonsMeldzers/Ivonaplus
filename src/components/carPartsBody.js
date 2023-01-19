import React, { useEffect, useState } from 'react'
import { Row, Container, Spinner } from 'react-bootstrap';
import CarPartsElement from './carPartsElement';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase-config';

import '../css/carPartsBody.css';

function CarPartsBody(props) {
  const [postLists, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const postsCollectionRef = collection(db, "CarParts"); 

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
    };
    getPosts();
  }, []);
  
  return (
    <div className='car_parts_body'>
    <Container className='car_parts_container'>
    {isLoading &&   <div className='loading_div'><Spinner className='loading_spinner' animation="grow" variant="primary" style={{ width: "7rem", height: "7rem" }} />
    </div>}
    {!isLoading &&
      <Row className='justify-content-md-center'>
      {postLists.map((post) => {
          const imageUrlsArr = post.imageUrls;
          return (
            <CarPartsElement id={post.id} key={post.id} title={post.title} text={post.text} imageUrls={imageUrlsArr} engine={post.engine} year={post.year}/>   
          );
        })}
      </Row>
    
    }
    </Container>
    </div>
  );


};

export default CarPartsBody;