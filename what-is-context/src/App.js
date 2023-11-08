import "./App.css";
import { UserProvider, useUser } from "./UserContext";


const LoggedInUser = () => {
  const { user } = useUser();
  return (
    <p>
      Hello, <span className="Username">{user.name}</span>
    </p>
  );
};

const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
};

const Page = () => {
  const { user } = useUser();
  return (
    <div>
      <h2>What is Lorem ipsum</h2>
      <p>
        Lorem ipsum dolor sit amet. Qui quos galisum sit animi voluptatem aut
        dolores consequatur est tempore ipsa. Non neque cupiditate et autem
        reprehenderit sed omnis quia qui laudantium dolor aut ipsam deserunt.
        Est corporis doloribus est enim corrupti ut pariatur deserunt est
        doloribus autem ea facilis natus hic ipsam rerum vel adipisci deserunt.
        Aut blanditiis facilis in Quis repellendus sed laboriosam pariatur et
        beatae quasi quo eveniet dignissimos. 
      </p>
      <p>Written by{user.name}</p>
    </div>
  );
};

function App() {
  console.log("this is app---->")
  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  console.log("this is root---->")
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

export default Root;
