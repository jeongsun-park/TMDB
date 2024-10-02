import "./App.css";
import { MovieProvider } from "./provider/MovieProvider";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("mainPage");

  return (
    <MovieProvider>
      <Header setCurrentPage={setCurrentPage} />
      <Main currentPage={currentPage} />
      <Footer />
    </MovieProvider>
  );
}

export default App;
