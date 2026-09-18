import React from 'react';

/**
 * GET: 
 * POST:
 * UPDATE : put patch
 * DELETE: 
 */

const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');


    if(!res.ok){
       throw new Error ("Failed to fetch post")
    }
    return res.json();
}

const PostPage = async () => {


    const posts =await getPosts();

    return (
        <div>
            <h3>Hello Post : {posts.length}</h3>
        </div>
    );
};

export default PostPage;