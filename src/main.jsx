import { render } from "react-dom";
import App from "./App";
import profile from "./Components/profile";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

  const rootElement = document.getElementById("root"); 
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>,
    rootElement
  );
