import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import Post, {PostsType} from "./Post/Post";

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (newPost: string) => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postsElements =
        props.posts.map(p => <Post
            message={p.message}
            likesCount={p.likesCount}/>)

    let addPost = () => {
        props.addPost(props.newPostText);
    }
    let onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(event.currentTarget.value);
    }
    return (
        <div className={s.item}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea className={s.text} onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <div className={s.button}>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;