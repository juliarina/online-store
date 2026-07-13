import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
