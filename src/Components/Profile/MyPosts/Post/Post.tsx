import React from 'react';
import s from './Post.module.css';

export type PostsType = {
    id: number
    message: string
    likesCount: number
    deletePost?: (postId: number) => void
}

const Post: React.FC<PostsType> = (props) => {
    const deletePost = () => {
        props.deletePost && props.deletePost(props.id)
    }
    return (
        <div className={s.item}>
            <img src="https://mygamehunter.ru/images/thumbnail/54027/550" alt="avatar"/>
            {props.message}
            <div onClick={deletePost} className={s.delete}>Delete post</div>
            <div className={s.like}>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;