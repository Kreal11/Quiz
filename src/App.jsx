import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Quiz from "./pages/quiz/Quiz";
import Email from "./pages/email/Email";
import Thanks from "./pages/thanks/Thanks";
import NotFound from "./pages/notFound/NotFound";
import Loader from "./components/loader/Loader";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Quiz />} />
        <Route path="questions/:id" element={<Quiz />} />
      </Route>
      <Route path="loader" element={<Loader />} />
      <Route path="email" element={<Email />} />
      <Route path="thanks" element={<Thanks />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
