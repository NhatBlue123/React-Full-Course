import PropTypes from 'prop-types'

function List(props)
{
   const itemList = props.items;
   const category = props.category;
   const listItems = itemList.map((item)=>{
       return <li key={item.id} >{item.name}: &nbsp; <b>{item.calories}</b></li>
   });

   return(<><h3 className="list-categories">{category}</h3> 
   <ol className="list-items">{listItems}</ol></>);
}
List.propTypes = { 
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,name: PropTypes.string,calories: PropTypes.number})),
  category: PropTypes.string
}
List.defaultProps = {
  items: [],
  category: "Catelory" 
}
export default List;