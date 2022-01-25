import React from 'react';
import {Input} from "antd";
import PostSelect from "./PostSelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <Input
                value={filter.query}
                style={{marginTop: 15}}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder={'Поиск...'}/>

            <PostSelect
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'text', name: 'По описанию'}
                ]}
                defaultValue={'Сортировка'}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                value={filter.sort}/>
        </div>
    );
};

export default PostFilter;