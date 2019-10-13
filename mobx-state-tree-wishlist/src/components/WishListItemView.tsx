import React from 'react';
import { observer, inject } from 'mobx-react';
import WishListItemEdit from './WishListItemEdit';
import { clone, applySnapshot, getSnapshot } from 'mobx-state-tree';
import { WishListItem } from '../models/WishList';

interface WishListItemViewProps {
    item: WishListItem
}

interface WishListItemViewState {
    isEditing: boolean;
    clone: WishListItem | null;
}

@inject("rootTree")
@observer
class WishListItemView extends React.Component<WishListItemViewProps, WishListItemViewState> {
    constructor(props: WishListItemViewProps) {
        super(props);

        this.state = {
            isEditing: false,
            clone: null
        }
    }

    renderEditable = () => {
        return (
            <li className='item'>
                <WishListItemEdit item={this.state.clone} />
                <span>
                    <button onClick={this.onSaveEdit}>저장</button>
                    <button onClick={this.onCancelEdit}>취소</button>
                </span>
            </li>
        );
    };

    onTooleEdit = () => {
        this.setState({
            isEditing: true,
            clone: clone(this.props.item)
        });
    };

    onCancelEdit = () => {
        this.setState({isEditing: false});
    };

    onSaveEdit = () => {
        if(this.state.clone) {
            const snapshot = getSnapshot(this.state.clone);
            applySnapshot(this.props.item, snapshot);
            this.setState({isEditing: false, clone: null});
        }       
    };

    render() {
        return this.state.isEditing ? (
            this.renderEditable()
        ) : (
            <li>
                {this.props.item.image && <img src={this.props.item.image} alt='' />}
                <h3>{this.props.item.name}</h3>
                <span>{this.props.item.price}</span>
                <span>
                    <button onClick={this.onTooleEdit}>수정</button>
                    <button onClick={this.props.item.remove}>삭제</button>
                </span>
            </li>
        )
    }
}

export default WishListItemView;