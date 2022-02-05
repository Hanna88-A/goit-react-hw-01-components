import Profile from './components/Profile/Profile'
import user from './components/Profile/user.json'


export default function App() {
  return <div>
    <Profile 
      avatar = {user.avatar} 
      username = {user.username} 
      tag = {user.tag}
      location = {user.location}
      stats = {user.stats} 
    />, 
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
