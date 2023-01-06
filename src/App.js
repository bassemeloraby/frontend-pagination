import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import Filter from './components/Filter';
function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState('')
  //start page
  const [currentPage, setCurrentPage] = useState(1);
  //number of posts
  const [postsPerPage] = useState(5);

  //fetch data
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
//filteration
const filterNames = (title)=>{
  setFilter(title);
  
}
const nameHandler =()=>{
  console.log(filter)
  if(filter.length !==0){
    return posts.filter((post)=>post.title.includes(filter))
  }
  return currentPosts
  
 }
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Filter filteration={filterNames}/>
      <Posts posts={nameHandler()} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
