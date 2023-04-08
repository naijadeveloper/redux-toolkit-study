import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#333",
        color: "#ccc",
        width: "100vw",
        height: "100vh",
        padding: "20px",
      }}
      className="App"
    >
      <Login />
      <Profile />
    </div>
  );
}

export default App;
