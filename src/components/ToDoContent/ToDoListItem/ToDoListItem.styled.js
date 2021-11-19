import styled from 'styled-components';

const ToDoListItemWrapper = styled.li`
    width: 100%;
    min-height: 50px;
    float: left;
    font-size: 14px;
    font-weight: 500;
    color: #444;
    line-height: 22px;

    background: #fff;
    border-radius: 5px;
    position: relative;
    box-shadow: 0 1px 2px rgba(44, 62, 80, 0.10);
    margin: 0 0 10px 0;
    padding: 14px 100px 14px 14px;
    word-break: break-word;
    
  &:last-of-type {
      margin: 0;
    }
`

const ToDoListItemText = styled.span`

`

const ToDoListItemButtons = styled.div`
    width: 100px;
    height: 50px;

    position: absolute;
    top: 0;
    right: 0;
`

const ToDoListItemButton = styled.button`
    width: 50px;
    height: 50px;
    float: left;
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    border: 0;
    box-shadow: none;
    outline: none;
    cursor: pointer;

    -webkit-appearance: none;
    -moz-appearance: none;
    
    &:last-of-type:before {
        content: '';
        width: 1px;
        height: 30px;
        background: #edf0f1;
    
        position: absolute;
        top: 10px;
        left: 0;
    }
`

const ToDoListItemButtonRemove = styled(ToDoListItemButton)`
   background-image: url(${props => props.icon});
`
const ToDoListItemButtonComplete = styled(ToDoListItemButton)`
     background-image: url(${props => props.icon});
`

export {
    ToDoListItemWrapper,
    ToDoListItemText,
    ToDoListItemButtons,
    ToDoListItemButtonRemove,
    ToDoListItemButtonComplete
}