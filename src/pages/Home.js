import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Card from '../components/Card'

const Home = () => {

  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const[posts, setPosts] = useState([]);

  async function fetchData(){
    setLoading(true);

    try{
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
      setPosts(data);
    }
    catch{
      console.log("error")
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (

    <div>
      {
        loading? (<Spinner/>) :
        (
          <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
             {
            posts.map( (post) => (
            <Card key = {post.id} post={post}/>
          ) )
          }
          </div>
          
        )
      }
    </div>
  )
}

export default Home