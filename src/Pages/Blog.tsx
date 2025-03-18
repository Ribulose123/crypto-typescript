import React from 'react';
import { useGetBusinessNewsQuery } from '../redux/Blogredux';

const Blog: React.FC = () => {
  const { data, error, isLoading } = useGetBusinessNewsQuery();

  console.log("Business News Data:", data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching news.</p>;

  return (
    <div className="bg-green-500 relative">
      <h2>Business News</h2>
        {data?.ariticle.map((newsinfo, index)=>(
          <div key={index} className='text-white'>
            <h3>{newsinfo.title}</h3>
          </div>
        ))}
    </div>
  );
};

export default Blog;
