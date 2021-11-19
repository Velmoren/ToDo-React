import styled from 'styled-components';

const ToDoContainer = styled.div`
    width: 100%;
    float: left;
    padding: 15px;
`

const ToDoList = styled.ul`
    width: 100%;
    float: left;
    padding-left: 0;
    list-style: none;
`

const ToDoListNotDone = styled(ToDoList)`
    &:empty:after {
        content: 'Нет задач на выполнение';
    }
    
     &:after {
        width: 100%;
        display: block;
        text-align: center;
        font-size: 12px;
        color: #aaa;
    }
`
const ToDoListCompleted = styled(ToDoList)`
    position: relative;
    padding: 60px 0 0 0;
    
    &:before {
        content: '';
        width: 150px;
        height: 1px;
        background: #d8e5e0;
    
        position: absolute;
        top: 30px;
        left: 50%;
    
        margin: 0 0 0 -75px;
    }
    
    &:empty:after {
        content: 'Нет выполненых задач';
    }
    
    &:after {
        width: 100%;
        display: block;
        text-align: center;
        font-size: 12px;
        color: #aaa;
    }
`

export {
    ToDoContainer,
    ToDoListNotDone,
    ToDoListCompleted
}