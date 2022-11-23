import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recettes from "./components/Recettes";
import Blog from "./components/Blog";
import Layout from "./components/Layout";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Recettes />} />
            <Route path="Recettes" element={<Recettes />} />
            <Route path="Blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
