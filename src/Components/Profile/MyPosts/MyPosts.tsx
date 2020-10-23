import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {MyPostsContainerType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

type FormDataType = {
    newPostBody: string
}

const MyPosts: React.FC<MyPostsContainerType> = (props) => {
    let postsElements =
        props.posts.map(p => <Post
            key={p.id}
            message={p.message}
            likesCount={p.likesCount}/>)

    let addPost = (values: FormDataType) => {
        props.addPost(values.newPostBody);
    }

    return (
        <div className={s.item}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <AddPostFormRedux onSubmit={addPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
const maxLength10 = maxLengthCreator(10)
const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    validate={[required, maxLength10]}
                    component={Textarea}
                    className={s.text}
                    name={"newPostBody"}
                    placeholder={"What's new?"}
                />
            </div>
            <div className={s.button}>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddPostFormRedux = reduxForm<FormDataType>({form: "profileAddPostForm"})(AddPostForm)
export default MyPosts;