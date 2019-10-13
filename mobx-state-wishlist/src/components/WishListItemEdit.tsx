import React from 'react';
import { observer } from 'mobx-react';
import { WishListItem } from '../models/WishList';

interface WishListItemEditProp {
    item: WishListItem | null
}

@observer
class WishListItemEdit extends React.Component<WishListItemEditProp> {

    render() {
        const { item } = this.props;
        if(!item) return null;
        return (
            <div className='item-edit'>
                Thing: <input value={item.name} onChange={this.onNameChange} />
                <br/>
                Price: <input value={item.price} onChange={this.onPriceChange} />
                <br/>
                Image: <input value={item.image} onChange={this.onImageChange} />
                <br/>
            </div>
        )    
    }
    
    onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!this.props.item) return null;
        this.props.item.changeName(e.target.value);
    }
    
    onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!this.props.item) return null;
        const price: number = parseInt(e.target.value);
        if(!isNaN(price)) this.props.item.changePrice(price);
    }

    onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!this.props.item) return null;
        this.props.item.changeImage(e.target.value);
    }
};

export default WishListItemEdit;