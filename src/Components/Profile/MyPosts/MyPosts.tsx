import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {MyPostsContainerType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../Common/FormsControls/FormsControls";

type FormDataType = {
    newPostBody: string
}

const MyPosts = React.memo((props: MyPostsContainerType) => {
    let postsElements =
        props.posts.map(p => <Post
            key={p.id}
            id={p.id}
            message={p.message}
            likesCount={p.likesCount}
            deletePost={props.deletePost}
        />)

    let addPost = (values: FormDataType) => {
        props.addPost(values.newPostBody);
    }

    return (
        <div className={s.item}>
            <div>
                <h3 className={s.title}>My posts</h3>
            </div>
            <div>
                <AddPostFormRedux onSubmit={addPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.form}>
                <Field
                    component={Textarea}
                    className={s.text}
                    name={"newPostBody"}
                    placeholder={"What's new?"}
                />
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddPostFormRedux = reduxForm<FormDataType>({form: "profileAddPostForm"})(AddPostForm)
export default MyPosts;