import React from 'react';
import {Spin} from "antd";
import s from './Loader.module.css'

const Loader = () => {
    return (
        <div className={s.loader}>
            <Spin size="large" />
            <h1 className={s.loader__text}>Loading...</h1>
        </div>
    );
};

export default Loader;