import React from 'react';
import WishListView from './components/WishListView';
import { setupRootStore } from './models/WishRootStore';
import { Provider } from 'mobx-react';
import './App.css';
import { Root } from './models/WishList';

interface Props {

}

interface State {
  group?: Root;
  selectUser: string;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      selectUser: ''
    };
  }

  componentDidMount = () => {
    const { group } = setupRootStore();
    this.setState({ group });
  }
  
  render() {
    const { group } = this.state;
    if(!group) return null;
    const selectUser = group.users.filter(user => user.id === this.state.selectUser)[0];

    return (
      <Provider rootTree={group}>
          <h1 className='App-title'>WishList</h1>
          <select onChange={this.onSelectUser}>
            <option>- Select user -</option>
            {
              group.users.map(user => ( 
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))
            }
          </select>
          {
            selectUser && <WishListView wishList={selectUser.wishList} />
          }
          {
            selectUser && <button onClick={selectUser.getSuggestions}>Suggestions</button>            
          }
      </Provider>
    );  
  }

  onSelectUser = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      selectUser: e.target.value
    })
  };
}

export default App;
