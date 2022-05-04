import './App.css';
import React from 'react';
import LoadingSpinner from './spinner/LoadingSpinner';
import Header from './header/header';
import Main from './main/main';
import { apiAddress } from './index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, tab: 'main', data: {} };
  }

  async componentDidMount() {
    if (this.state.data?.points != null) return;
    await this.setState({ isLoading: true });

    const result = await fetch(apiAddress + '/get-all')
      .then(response => response.json());
    this.state.data = result;

    for (const student of result.points) {
      let sum = 0;
      for (const task in student) {
        if (task !== 'name' && task !== 'id' && task !== 'img') {
          sum += student[task];
        }
      }
      student.sum = sum;
    }

    await this.setState({ isLoading: false });
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoading ? <LoadingSpinner /> : <div></div>}
        <Header />
        <div className="header-padding">
          {
            this.state.tab === 'main' ?
              <Main data={this.state.data} /> :
              <div></div>
          }
        </div>
      </div>
    );
  }
}

export default App;
