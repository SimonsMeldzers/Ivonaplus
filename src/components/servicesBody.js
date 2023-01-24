import React, { useEffect, useState } from 'react'
import { Row, Container, Spinner } from 'react-bootstrap';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase-config';

import '../css/servicesBody.css';
import ServicesElement from './servicesElement';

function ServicesBody(props) {
  const [postLists, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const postsCollectionRef = collection(db, "Services"); 

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
    };
    getPosts();
  }, []);
  
  return (
    <>
    {isLoading &&   <div className='loading_div'><Spinner className='loading_spinner' animation="grow" variant="primary" style={{ width: "7rem", height: "7rem" }} />
    </div>}
    {!isLoading &&
      <Row className='justify-content-md-center' style={{paddingBottom:'40px'}}>
      {postLists.map((post) => {
          return (
            <ServicesElement id={post.id} key={post.id} heading1={post.heading1} heading2={post.heading2} imageUrl={post.imageUrl} text1={post.text1} text2={post.text2} bullets={post.bullets}/>   
          );
        })}
      </Row>
    
    }
</>
  );


};

export default ServicesBody;