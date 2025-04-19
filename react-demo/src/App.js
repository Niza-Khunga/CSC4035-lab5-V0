import "./styles.css";
import { useState } from "react";

// WelcomeMessage Component to display a greeting with props
function WelcomeMessage({ name }) {
  return <h1>Welcome to Aegis Legal Advocates, {name}!</h1>;
}

// ToggleMessage Component for toggling the legal notice
function ToggleMessage() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowMessage(!showMessage)}
        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
      >
        {showMessage ? "Hide" : "Show"} Important Legal Notice
      </button>
      {showMessage && (
        <div className="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-lg shadow-md">
          <p>
            The information on this website is for general information purposes
            only. Nothing on this site should be taken as legal advice for any
            individual case or situation.
          </p>
        </div>
      )}
    </div>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="App">
      <WelcomeMessage name="Client" />
      <p className="my-4">How can we assist you with your legal needs today?</p>
      <ToggleMessage />
    </div>
  );
}
