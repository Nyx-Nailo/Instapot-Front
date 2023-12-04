import React, { useState } from 'react'
import "./Timeline.css";
import Post from './Posts/Post';

interface PostData {
    user: string;
    postImage: String;
    likes: number;
    timestamp: String;
}

function Timeline() {
    const [posts, setPosts] = useState<PostData[]>([
        {
            user: "InstaPotter_",
            postImage: 
                "https://cdn.pixabay.com/photo/2019/04/27/21/56/cactus-4161380_1280.jpg",
            likes: 190,
            timestamp: "2d"
        },
        {
            user: "LisasPlantor",
            postImage: 
                "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
            likes: 10042,
            timestamp: "12h"
        },
        {
            user: "NisseLiten",
            postImage: 
                "https://cdn.pixabay.com/photo/2017/01/24/03/53/plant-2004483_1280.jpg",
            likes: 45,
            timestamp: "3h"
        },
        {
            user: "MarieNilsson",
            postImage: 
                "https://cdn.pixabay.com/photo/2023/11/13/00/47/cactus-8384331_1280.jpg",
            likes: 301,
            timestamp: "33min"
        },
        {
            user: "Murre",
            postImage: 
                "https://cdn.pixabay.com/photo/2016/03/11/19/28/fern-1250903_1280.jpg",
            likes: 99,
            timestamp: "1h"
        },
    ]);
  return (
    <div className="timeline">
        <div className="timeline__left">
            <div className="timeline__posts">
                {posts.map((post, index) => (
                    <Post 
                        key={index}
                        user={post.user} 
                        postImage={post.postImage.valueOf()} 
                        likes={post.likes} 
                        timestamp={post.timestamp.toString()}
                    />
                ))}
            </div>
        </div>       
    </div>
  );
}

export default Timeline;