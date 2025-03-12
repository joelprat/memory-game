import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./Landing";
import App from "./Play";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/play" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
