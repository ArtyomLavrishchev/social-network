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
            <img
                src="https://yt3.ggpht.com/a/AGF-l7-MVpKP7wI1cV_VsIoRTe_zN7QuGXqugrlDqQ=s900-c-k-c0xffffffff-no-rj-mo"/>
            {props.message.trim()}
            <div className={s.like}>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;