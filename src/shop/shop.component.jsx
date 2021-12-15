import React from 'react';
import Shop_Data from './shop.data.jsx'
import PreviewCollection from '../components/preview-collection/previewcollection.component.jsx';
class ShopPage extends React.Component {
constructor(props){
    super(props);
    this.state={
        collections:Shop_Data
    };
}
render(){
    const {collections} = this.state;
    return(
         <div className="shop-page">
             {
                 collections.map(({id, ...otherCollectionProps}) => (
                     <PreviewCollection key={id} {...otherCollectionProps}/>
                 ))
             }
         </div>
    )
}
}
export default ShopPage;