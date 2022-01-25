import React from 'react';
import {Button} from "antd";
import s from './Posts.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <div>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
                <Button
                    onClick={() => props.remove(props.post)}
                    type="primary" >Delete</Button>
        </div>
    );
};

export default Post;