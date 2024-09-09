import react, {useState} from "react"
import "./App.css"
const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // For example, you could make an API request to log in
  };


    return (
      <div className="main">
      <div className="left">
                {/* Video element */}
                <video className="sidebar-video" autoPlay loop muted>
          <source src="/sidebar-animation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="right">
        <div className="login-content">
          <h2 className="signin-heading">Sign into Dribble</h2>
          <div className="google-signin-container">
            <button className="google-signin-button">
              <img src="/google_icon.png" alt="google" className="google-icon" />
              Sign in with Google
            </button>
          </div>
          <div className="login-card">
            <form className="login-form" onSubmit={handleSubmit}>
              <label htmlFor="username" className="input-label">Username or Email</label>
              <input type="text" id="username" className="input-field" placeholder="Username or Email" value={username} onChange={(e) => setUsername(e.target.value)} />

              <div className="password-label-container">
                <label htmlFor="password" className="input-label">Password</label>
                <a href="#" className="forget-password">Forget?</a>
              </div>

              <input type="password" id="password" className="input-field" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

              <button type="submit" className="submit-button">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>




    );
};

export default App;
