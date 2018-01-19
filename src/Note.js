import React, { Component } from 'react';
import { addComment, removeComment, filterList } from './actions';
import { connect } from 'redux-zero/react';
import './css/style.css'; 

const List = ({item, index}) => {
	return (
		<li className="draggable" draggable="true">
            {item}
            <button className="delete" onClick={() => removeComment(index)}><i className="fa fa-trash"></i></button>
		</li>
	);
}

const FilteredList = ({items, index}) => {
    const onSubmit = e => {
        e.preventDefault();
        if(this.refInput.value){
         addComment(this.refInput.value);
         this.refInput.value = '';
       }
        
     };
     let newListast = JSON.parse( localStorage.getItem("Mynote") );
    const listComponent =  items.map ( (item, index) => {
        return <List
            key = {index}
            item={item}
            index={index}
           />
      })
      return (
        <div className="filter-list">
            <form onSubmit={onSubmit}>
                <div className="adder">
                    <input
                        type="text"
                        className="input"
                        name="name"
                        placeholder="Search"
                        ref={e => (this.refInput = e)}
                        onChange={(e) => filterList(e)}
                    />
                    {/* <input className="add" type="submit" name="submit" value="+"/> */}
                    <button className="add" type="submit" name="submit"><i className="fa fa-fw fa-plus"></i></button>
                </div>
            </form>
            <ul>
                {listComponent}
            </ul>
        </div>
      );
  };
  
export default FilteredList;