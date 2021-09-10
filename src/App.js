import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript 1', body: 'description'},
        {id: 2, title: 'JavaScript 2', body: 'description'},
        {id: 3, title: 'JavaScript 3', body: 'description'}
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    return (
        <div className={'App'}>
            <PostForm create={createPost}/>
            <hr style={{margin:'15px 0'}}/>
            <div>
                <select>
                    <option value="1111">By title</option>
                    <option value="1111">By description</option>
                </select>
            </div>
            {posts.length
                ?<PostList remove={removePost} posts={posts} title={'Post by JS'}/>
                :<h1 style={{textAlign:'center'}}>Post not found</h1>
            }

        </div>
    )
        ;
}

export default App;
