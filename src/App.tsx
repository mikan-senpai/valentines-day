import { useState, useEffect } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  const [sparkles, setSparkles] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles(current => {
        const newSparkle = {
          id: Date.now(),
          style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`
          }
        };
        return [...current, newSparkle].slice(-15);
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Pretty please!",
      "With a chocolate rice cake on top",
      "What about a matcha frostie",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to mikan's ghost",
      "please babe",
      "I'll give you a cookie",
      "What about two cookies?",
      "Three cookies, final offer",
      "You're breaking my heart </3",
      "I'm running out of phrases",
      "I'll do your laundry",
      "And wash the dishes",
      "I'll be your best friend",
      "Pretty pretty please with sugar on top",
      "I'm not crying, you're crying",
      "Time to bring out the puppy eyes 🐶",
      "*Plays sad violin music*",
      "Is that your final answer?",
      "But we'd be so cute together!",
      "Error 404: Acceptance not found",
      "Loading more pleading phrases...",
      "My heart.exe has stopped working",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "No :( 💔",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="valentine-container">
      {sparkles.map(sparkle => (
        <div key={sparkle.id} className="sparkle" style={sparkle.style} />
      ))}
      <a className="github-link">made with ❤️ by mikan</a>

      {yesPressed ? (
        <div className="card success-container">
          <div className="image-container">
            <img
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              alt="Celebrating bears kissing"
            />
          </div>
          <div className="text-container">
            yaaaaayyyyyyy I love you Babbyyyy 😘❤️!!!
          </div>
          <p className="message">
            Thank you for making me the happiest person in the world! 💖
            <br />
            You've made this Valentine's Day absolutely perfect! 🌹
          </p>
        </div>
      ) : (
        <div className="card">
          <div className="image-container">
            <img
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
              alt="Cute bear with roses"
            />
          </div>
          <h1 className="text-container">Will you be my Valentine?</h1>
          <p className="message">
            Every moment with you is like a dream come true. Would you make this Valentine's Day special by being mine? 🌹
            <br />
            Together, we could create something magical... ✨
          </p>
          <div>
            <button
              className="yes-button"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>

            <button onClick={handleNoClick} className="no-button">
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
