import './App.css'
import NovellServicesLogin from './components/NovellServicesLogin';
import ProfilePage from './components/ProfilePage';
function App() {
  const message = "Hello i am the message!";
  return (
    <>
      <div>
        <h1 style={{ color: "blue", textAlign: "center" }}>Hello i am Srijan Pandit</h1>
        <p style={{ backgroundColor: "yellow", padding: "10px", fontSize: "18px" }}>
          Welcome to my jsx project.
        </p>

        <ProfilePage/>

        <NovellServicesLogin/>
      </div>  
    </>
  )
}
export default App