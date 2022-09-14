import React, { useEffect } from 'react';
import { Tabs, Layout, Row, TableColumnGroupType, List } from 'antd';
import TodoItem from './TodoItem';

const TodoTab = ({ todos, onTodoRemoval, onTodoToggle }: { todos: any, onTodoRemoval: any, onTodoToggle: any }) => {
    return (
        <>
            <List
                locale={{ emptyText: "There's nothing to do :(", }}
                dataSource={todos}
                renderItem={(todo: any) => {
                    return (
                        <TodoItem todo={todo}
                            onTodoToggle={onTodoToggle}
                            onTodoRemoval={onTodoRemoval}
                        />
                    )
                }}
                pagination={{
                    position: 'bottom',
                    pageSize: 10,
                }}
            />
        </>
    )
}

export default TodoTab;