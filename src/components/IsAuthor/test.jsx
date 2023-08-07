import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ViewPost({ token }) {
  const { id } = useParams();
  const [post, setPost] = useState(null); // Initialize post state

  useEffect(() => {
    async function fetchSingleData() {
      try {
        const response = await fetch(
          `https://strangers-things.herokuapp.com/api/2306-FTB-ET-WEB-FT/posts/${id}`,
          {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
          }
        );
        const result = await response.json();
        console.log(result);
        setPost(result.data.post); // Update post state
      } catch (error) {
        console.log('Error at getting posts', error);
      }
    }

    fetchSingleData();
  }, [id, token]);

  console.log(post);

  return (
    <>
      <h2>Post Details</h2>
      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </>
      )}
    </>
  );
}