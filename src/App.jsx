import { Suspense, useEffect, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "./redux/contacts/operations";
import { fetchContacts } from "./redux/contacts/operations";
import { selectError, selectLoading } from "./redux/contacts/selectors";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));

import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";

// const TasksPage = lazy(() => import("../pages/TasksPage/TasksPage"));
// const ProfilePage = lazy(() => import("../pages/ProfilePage/ProfilePage"));

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    // <div className="container">
    //   <ContactForm />
    //   <SearchBox />
    //   {loading && <p>Loading contacts...</p>}
    //   {error && <p style={{ color: "red" }}>Error: {error}</p>}
    //   <ContactList />
    // </div>
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/profile"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
            }
          />
          <Route
            path="/tasks"
            element={<PrivateRoute component={<ContactList />} />}
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
