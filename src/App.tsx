import { useLocation, Routes, Route } from "react-router-dom";
import { MenuHeader, Footer } from "./components";
import { FullScren, PrivateWrapper } from "./hoc";
import { useDispatch } from "react-redux";
import {
  HomePage,
  GamePage,
  AboutPage,
  ContactPage,
  SingupPage,
  NotFound,
} from "./routes";
import cn from "classnames";
import clasess from "./App.module.css";
import Firebase from "./service/firebase";

import { NotificationContainer } from "react-notifications";
import "../node_modules/react-notifications/lib/notifications.css";

import { useEffect, useMemo, useState } from "react";
import { getUserAsync } from "./store/user/user";
import { PageProvider } from "./context";

export const firebaseInstance = Firebase.getInstance();

export const App = () => {
  const [page, setPage] = useState<string>("");
  const location = useLocation();
  const dispatch = useDispatch();

  const isPadding =
    location.pathname === "/" || location.pathname === "/game/board";
  const bgActive = location.pathname === "/";

  useEffect(() => {
    getUserAsync(dispatch);
  }, [dispatch]);

  const pageProviderValue = useMemo(() => {
    return {
      page,
      onChangePage: setPage,
    };
  }, [page]);

  return (
    <PageProvider value={pageProviderValue}>
      <MenuHeader bgActive={!isPadding} />

      <div
        className={cn(clasess.wrap, {
          [clasess.isPadding]: isPadding,
        })}
      >
        <Routes>
          <Route path="/" element={<FullScren component={<HomePage />} />} />
          <Route element={<PrivateWrapper />}>
            <Route path="game/*" element={<GamePage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
          <Route path="contact" element={<ContactPage />} />
          <Route path="singup" element={<SingupPage page={page} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer bgActive={!bgActive} />
      <NotificationContainer />
    </PageProvider>
  );
};
