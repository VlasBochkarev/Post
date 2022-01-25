import React, {useEffect, useState} from 'react';
import PostList from "./PostList";
import PostForm from "./PostForm";
import {Button, Pagination} from "antd";
import PostFilter from "./PostFilter";
import MyModal from "../UI/MyModal/MyModal";
import {usePosts} from "../../hooks/usePosts";
import PostService from "../../API/PostService";
import Loader from "../UI/Loader/Loader";
import {useFetching} from "../../hooks/useFetch";
import {getPageCount, getPagesArray} from "../../Utils/pages";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    let pagesArray = getPagesArray(totalPages)

    const [fetchPosts, isLoading, postError] = useFetching(async (page,limit) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })



    useEffect(() => {
        fetchPosts(page,limit)
        console.log('render')
    }, [page,limit])

    const showModal = () => {
        setModal(true)
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const currentPage = (page,limit) => {
        setPage(page)
        setLimit(limit)
        fetchPosts(page,limit)
    }



    return (
        <div>
            <Button type="primary" onClick={showModal}>Добавить пост</Button>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <Pagination
                onChange={currentPage}
                style={{marginTop: 15}}
                defaultCurrent={1}
                total={100} />
            {postError &&
            <h1>Error: {postError}</h1>}
            {isLoading
                ? <Loader/>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts}/>}
        </div>
    );
};

export default Posts;