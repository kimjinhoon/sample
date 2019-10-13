import React from 'react';
import { observer } from 'mobx-react';
import { WishListItem, WishListItemModel, WishList } from '../models/WishList';
import WishListItemEdit from './WishListItemEdit';

interface WishListItemEntryProp {
    wishList: WishList
}

interface WishListItemEntryState {
    entry: WishListItem
}

@observer
class WishListItemEntry extends React.Component<WishListItemEntryProp, WishListItemEntryState> {
    constructor(props: WishListItemEntryProp) {
        super(props);
        this.state = {
            entry: WishListItemModel.create({ name: '', price: 0} )
        }
    }

    render() {
        
        return (
            <div>
                <WishListItemEdit item={this.state.entry} />
                <button onClick={this.onAdd}>Add</button>
            </div>
        )    
    }
    
    onAdd = () => {
        this.props.wishList.add(this.state.entry);
        this.setState({
            entry: WishListItemModel.create({
                name: '', price: 0
            })
        });
    };
    
};

export default WishListItemEntry;