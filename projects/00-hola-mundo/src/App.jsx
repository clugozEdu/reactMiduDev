import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "clugoant",
    avatar: "cesarlugo1410",
    isFollowing: true,
  },
  {
    userName: "imalespin00",
    avatar: "ingridvanessamaradiaga3612",
    isFollowing: false,
  },
  {
    userName: "jlopezg",
    avatar: "jose",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, avatar, isFollowing }) => {
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            avatar={avatar}
            initialIsFollowing={isFollowing}>
            {userName}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
