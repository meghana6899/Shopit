import React from 'react'
import './newCollections.css';
import new_collection from '../Assets/new_collections';
import Item from '../Items/Item';

const NewCollections = () => {
    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item, i) => {
                    return <Item key={i} name={item.name} new_price={item.new_price} old_price={item.old_price} image={item.image} />
                })}
            </div>
        </div>
    )
}

export default NewCollections