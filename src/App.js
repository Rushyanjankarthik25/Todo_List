import "./App.css";
import Header from "./Header.js";

function Main() {
  return (
    <main className="App-body">
      <p>Welcome to the Todo app ✌🏻</p>

      <input
        type="text"
        placeholder="Enter task to do..."
        className="task-input"
      />
      <button className="task-button">Add task</button>
      <p>Here's the list of the items</p>
    </main>
  );
}

function Footer() {
  return <footer className="App-footer">Task Accomplished</footer>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
