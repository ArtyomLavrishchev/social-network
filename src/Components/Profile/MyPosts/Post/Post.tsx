import React from 'react';
import s from './Post.module.css';

export type PostsType = {
    id?: number
    message: string
    likesCount: number
}

const Post: React.FC<PostsType> = (props) => {
    return (
        <div className={s.item}>
            <img src="https://mygamehunter.ru/images/thumbnail/54027/550" alt="avatar"/>
            {props.message}
            <div className={s.like}>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;