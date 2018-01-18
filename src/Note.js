import React, { Component } from 'react';
import { addComment, removeComment, filterList } from './actions';
import { connect } from 'redux-zero/react';
import './App.css';

const List = ({item, index}) => {
	return (
    <div className="data">
		<div className="lista">
            <p>{item}</p>
            <button className="delete" onClick={() => removeComment(index)}>Remove Comment</button>
		</div>
    </div>
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
                <div className="inner-wrap">
                    <label>Add Notes
                    <input
                        type="text"
                        name="name"
                        placeholder="Search"
                        ref={e => (this.refInput = e)}
                        onChange={(e) => filterList(e)}
                    />
                    </label>
                    <input type="submit" name="submit" value="Add Note"/>
                </div>
            </form>
            {/* <input type="text" placeholder="Search" onChange={(e) => filterList(e)}/> */}
            {listComponent}
        </div>
      );
  };
  
export default FilteredList;