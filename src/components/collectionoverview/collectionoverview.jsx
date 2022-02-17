import React from "react";
import { connect } from "react-redux";
import { selectData } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import PreviewCollection from "../preview-collection/previewcollection.component";
import './collectionoverview.style.scss'


const CollectionOverview = ({collections}) =>{
    return(
        <div className="collection-overview">
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <PreviewCollection key={id} {...otherCollectionProps}/>
            ))
        }
    </div>
    )
}
const mapStateToProps =()=>createStructuredSelector({
    collections : selectData
})

export default connect(mapStateToProps)(CollectionOverview);