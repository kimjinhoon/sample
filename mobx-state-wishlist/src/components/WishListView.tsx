import React from 'react';
import { observer } from 'mobx-react';
import WishListItemView from './WishListItemView';
import { WishList } from '../models/WishList';
import WishListItemEntry from './WishListItemEntry';

interface WishListViewProps {
    wishList?: WishList
}

@observer
class WishListView extends React.Component<WishListViewProps> {  
    render() {
        const { wishList } = this.props;
        if(!wishList) return null;
        return (
            <div>
                <ul>
                    {wishList.items.map((item, idx) => (
                        <WishListItemView key={idx} item={item} />
                    ))}
                </ul>
                Total: {wishList.totalPrice} $
                <WishListItemEntry wishList={wishList} />
            </div>
        );
    }
} 

export default WishListView;