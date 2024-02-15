import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Quiz from "./pages/quiz/Quiz";
import Email from "./pages/email/Email";
import Thanks from "./pages/thanks/Thanks";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="question/:id" element={<Quiz />} />
          <Route path="email" element={<Email />} />
          <Route path="thanks" element={<Thanks />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
