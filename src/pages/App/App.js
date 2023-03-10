import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistory from '../OrderHistory/OrderHistory';
import  ProfilePage from '../ProfilePage/ProfilePage';
import styles from './App.module.scss';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className={styles.App}>
      <h1> Clean Cosmētika </h1>
      { user ?
        <>
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
            <Route path="/orders" element={<OrderHistory user={user} setUser={setUser} />} />
            <Route path="/profile" element={<ProfilePage user={user} setUser={setUser} />} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}