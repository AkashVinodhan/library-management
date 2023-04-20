import Navbar from "./components/Navbar";
import BookCard from "./components/BookCard";
import { Route, Routes } from "react-router-dom";
import Policy from "./pages/Policy";
import FormikPage from "./pages/FormikPage";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<BookCard />} />
          <Route path="/addbook" element={<FormikPage />} />
          <Route path="/:id" element={<FormikPage />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
