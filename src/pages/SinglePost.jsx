import React from "react";
import { useParams } from "react-router-dom";
function SinglePost() {
  const { id } = useParams();

  return <div className='flex-1 px-6 py-2'>Single Post {id}</div>;
}

export default SinglePost;
