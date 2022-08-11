import { useLocation, Routes, Route } from "react-router-dom";
import { MenuHeader, Footer } from "./components";
import { FullScren, PrivateWrapper } from "./hoc"; 
import { useDispatch } from "react-redux";
import { HomePage, GamePage, AboutPage, ContactPage, NotFound } from "./routes";
import cn from "classnames";
import clasess from "./App.module.css";
import Firebase from "./service/firebase";
import { NotificationContainer } from "react-notifications";

import "../node_modules/react-notifications/lib/notifications.css";
import { useEffect } from "react";
import { getUserAsync } from "./store/user/user";

export const firebaseInstance = Firebase.getInstance();

const App = () => {
  const location = useLocation();
  const isPadding =
    location.pathname === "/" || location.pathname === "/game/board";
  const bgActive = location.pathname === "/";
  const dispatch = useDispatch();

  useEffect(() => {
    getUserAsync(dispatch);
  }, [dispatch]);
  return (
    <>
      <MenuHeader bgActive={!isPadding} />
      <div
        className={cn(clasess.wrap, {
          [clasess.isPadding]: isPadding,
        })}
      >
        <Routes>
          <Route path="/" element={<FullScren component={<HomePage />} />} />
          <Route element={<PrivateWrapper/>}>
            <Route path="game/*" element={<GamePage />}/>
            <Route path="about" element={<AboutPage />}/>
          </Route>
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer bgActive={!bgActive} />
      <NotificationContainer /></>
  );
};

export default App;
