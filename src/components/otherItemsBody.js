import React, { useEffect, useState } from 'react'
import { Row, Container, Spinner } from 'react-bootstrap';
import OtherItemsElement from './otherItemsElement';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase-config';

import '../css/otherItemsBody.css';

function OtherItemsBody(props) {
  const [postLists, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const postsCollectionRef = collection(db, "OtherItems"); 

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
      <h2><span className='heading_decor'>Lietotas</span> un <span className='heading_decor'>jaunas</span> preces plaša klāsta.</h2>
    <Container className='car_parts_container'>
    {isLoading &&   <div className='loading_div'><Spinner className='loading_spinner' animation="grow" variant="primary" style={{ width: "7rem", height: "7rem" }} />
    </div>}
    {!isLoading &&
      <Row className='justify-content-md-center'>
      {postLists.map((post) => {
          const imageUrlsArr = post.imageUrls;
          return (
            <OtherItemsElement id={post.id} key={post.id} title={post.title} text={post.text} imageUrls={imageUrlsArr} engine={post.engine} year={post.year}/>   
          );
        })}
      </Row>
    
    }
    </Container>
    </div>
  );


};

export default OtherItemsBody;