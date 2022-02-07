import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

import Statistics from './components/Statistics/Statistics';
import data from './components/Statistics/data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import trasactions from './components/TransactionHistory/transactions.json';

export default function App() {
  return <div>
    <Profile 
      avatar={user.avatar} 
      username={user.username} 
      tag={user.tag}
      location={user.location}
      stats={user.stats} 
    />
    <Statistics
      title="Upload stats"
      stats={data}
    />
    <FriendList
      friends={friends}
    />
    <TransactionHistory
      items={trasactions}
    />
  </div>
}





// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
