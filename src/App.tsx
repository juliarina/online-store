import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/product' element={<ProductPage />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
