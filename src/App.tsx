import { useLocation, Routes, Route } from "react-router-dom";
import { MenuHeader, Footer } from "./components";
import { HomePage, GamePage, AboutPage, ContactPage, NotFound } from "./routes";
import cn from "classnames";
import clasess from "./App.module.css";
import { FirebaseContext } from "./context/firebaseContext";
import Firebase from "./service/firebase";

const firebaseInstance = Firebase.getInstance();

const App = () => {
  const location = useLocation();
  const isPadding = location.pathname === "/" || location.pathname === "/game/board";
  const bgActive = location.pathname === "/";
  return (
    <FirebaseContext.Provider
      value={firebaseInstance}
    >
      <MenuHeader bgActive={!isPadding} />
      <div
        className={cn(clasess.wrap, {
          [clasess.isPadding]: isPadding,
        })}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="game/*" element={<GamePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer bgActive={!bgActive}/>
    </FirebaseContext.Provider>
  );
};

export default App;
