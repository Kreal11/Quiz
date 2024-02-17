import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Email = () => {
  const [email, setEmail] = useState("");
  const [redirecting, setRedirecting] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const quizResults = JSON.parse(localStorage.getItem("quizData")) || [];
    const newData = { ...quizResults, 5: { email } };
    localStorage.setItem("quizData", JSON.stringify(newData));

    setRedirecting(true);
    setTimeout(() => {
      navigate("/thanks");
      setRedirecting(false);
    }, 1000);

    setEmail("");
  };
  return (
    <div>
      <h3>Email</h3>
      <p>Enter your email to get full access</p>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your email"
          value={email}
          onChange={handleEmailChange}
          disabled={redirecting}
        />
        <button type="submit" disabled={redirecting}>
          Next
        </button>
      </form>
      <p>By continuing I agree with Privacy policy and Terms of use</p>
    </div>
  );
};

export default Email;
