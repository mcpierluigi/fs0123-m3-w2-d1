import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import books from "./data/horror.json";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Welcome />
      <BookList books={books} />
      <MyFooter />
    </div>
  );
}

export default App;
