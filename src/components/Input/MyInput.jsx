import React, {useState} from 'react';
import {Button, Input} from 'antd';
import {UserOutlined} from "@ant-design/icons";

const MyInput = () => {
    const [nodes, setNodes] = useState([
        {id: 1, text: 'купить молоко'},
        {id: 2, text: 'купить хлеб'},
        {id: 3, text: 'купить масло'},
    ])
    const [node, setNode] = useState({id: '', text: ''})

    const createNode = () => {
        const newNode = {
            ...node
        }

        setNodes([...nodes, newNode])


        console.log(node)
    }


    return (
        <div>
            <Input
                onChange={e => setNode(e.target.value)}
                value={node.text}
                size="large"
                placeholder="Введите текст!"
                prefix={<UserOutlined/>}/>
            <Button style={{marginTop: 15}} type="primary" onClick={createNode}>Добавит заметку</Button>
            <div>
                {nodes.map(node => <div>{node.id}. {node.text}</div>)}

            </div>
        </div>
    );
};

export default MyInput;