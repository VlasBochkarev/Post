import React from 'react';
import Post from "./Post";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, remove}) => {
    if(!posts.length){
        return <h1 style={{textAlign: 'center', fontSize: 28}}>Посты не найдены</h1>
    }
    return (

        <div>
            <h1 style={{textAlign: 'center', fontSize: 28}}>Список постов</h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <Post remove={remove} number={index + 1} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    );
};

export default PostList;