import store from './store';


export const addComment = (comment) => {
   let oldList = [...store.getState().initialItems];
   const newList = oldList.concat(comment);
   let arJson = JSON.stringify(newList);
   localStorage.setItem("Mynote", arJson);
   let getNewList = JSON.parse( localStorage.getItem("Mynote") );
   store.setState({
    initialItems: getNewList,
    items: getNewList
   });
};

export const filterList = (event) => {
    let updatedList = [...store.getState().initialItems];
    //let updatedList = JSON.parse( localStorage.getItem("Mynote") );
    if(updatedList.length > 0){
        updatedList = updatedList.filter(function(item){
            return item.toLowerCase().search(
              event.target.value.toLowerCase()) !== -1;
          });
          store.setState({items: updatedList});
    } else{
        store.setState({items: []});
    }
    console.log('ingresaaa!!!', updatedList.length)
};

export function componentWillMount () {
    let newList = [...store.getState().initialItems];
    let newListast = JSON.parse( localStorage.getItem("Mynote") );

    if(newListast.length !== null){
        store.setState({items: newListast})
    } else{
        store.setState({items: newList})
    }
    //let newList = JSON.parse( localStorage.getItem("Mynote") );
};

export const removeComment = (index) => {
    //let getNewList = JSON.parse( localStorage.getItem("Mynote") );
    let getNewList = [...store.getState().items];
    if(getNewList.length > 0){
    getNewList.forEach(function (item, id, arr) {
        if (item === getNewList[index]) {
            getNewList.splice(index, 1);
        }
    });
    store.setState({items: getNewList})
    } else {
        localStorage.removeItem('Mynote');
        store.setState({items: getNewList})
    }
}
