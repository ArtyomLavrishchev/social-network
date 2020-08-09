import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import Post, {PostsType} from "./Post/Post";

type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}


const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postsElements =
        props.posts.map(p => <Post
            key={p.id}
            message={p.message}
            likesCount={p.likesCount}/>)

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.item}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea className={s.text}
                              onChange={onPostChange}
                              value={props.newPostText}
                    />
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