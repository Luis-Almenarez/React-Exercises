import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

const users = [
  {
    userName: "_luisalmenarez",
    name: "Luis Almenarez",
    isFollowing: true,
  },
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: true,
  },
  {
    userName: "carlosazaustre",
    name: "Carlos Azaustre 🎃",
    isFollowing: false,
  },
  {
    userName: "FalconMasters",
    name: "Carlos Arturo",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            userName={userName}
            initialIsFollowing={isFollowing}
            name={name}
            key={userName}
          />
        );
      })}
    </section>
  );
}
