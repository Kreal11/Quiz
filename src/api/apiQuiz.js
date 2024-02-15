import axios from "axios";
import { toast } from "react-toastify";

export const quizInstance = axios.create({
  baseURL: "https://65ce7da5c715428e8b40d999.mockapi.io/api/quiz/",
});

export const getAllQuestions = async () => {
  try {
    const response = await quizInstance.get("questions/");
    console.log(response);
    return response.data;
  } catch (err) {
    toast.error(`Oops, something went wrong! Try later! Error: ${err.message}`);
    console.log(err.message);
  }
};

export const getAllLanguages = async () => {
  try {
    const response = await quizInstance.get("languages");
    return response.data;
  } catch (err) {
    toast.error(`Oops, something went wrong! Try later! Error: ${err.message}`);
    console.log(err.message);
  }
};
