import React, {useState} from 'react';
import s from "./Posts.module.css";
import {Button, Input} from "antd";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', text: ''})
    const addNewPost = () => {
        const addPost = {
            ...post, id: Date.now()
        }
        create(addPost)
        setPost('')
    }
    return (
        <form>
            <div className={s.post__input}>
                <Input
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    size="large"
                    placeholder={'Название поста'}/>
            </div>
            <div className={s.post__input}>
                <Input
                    value={post.text}
                    onChange={e => setPost({...post, text: e.target.value})}
                    size="large"
                    placeholder={'Описание поста'}/>
            </div>
            <div className={s.post__input}>
                <Button
                    onClick={addNewPost}
                    type="primary">Создать пост</Button>
            </div>
        </form>
    );
};

export default PostForm;