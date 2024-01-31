import { useEffect } from "react";

import {
  Routes,
  Route,
  useNavigationType,
} from "react-router-dom";

import Terminal from "./pages/Terminal";



function App() {
  const action = useNavigationType();
  const pathname = location.pathname;

  //

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Terminal />}/>
    </Routes>
    
  );
}

export default App;
