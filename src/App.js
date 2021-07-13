
import './App.css';
import ProfilePhoto from "./component/profile/ProfilePhoto.js";
import FullName from "./component/profile/FullName.js";
import Address from "./component/profile/Address.js";
function App() {
  return (
    <div className="App">
     <ProfilePhoto />
     <FullName/>
     <Address/>
    </div>
  );
}

export default App;
