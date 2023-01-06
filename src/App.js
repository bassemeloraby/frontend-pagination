import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './components/Posts';
function App() {
  const [posts, setPosts] = useState([]);
 
  //start page
  const [currentPage, setCurrentPage] = useState(1);
  //number of posts
  const [postsPerPage, setPostsPerPage] = useState(10);

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


  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Posts posts={currentPosts} />
    </div>
  );
}

export default App;
