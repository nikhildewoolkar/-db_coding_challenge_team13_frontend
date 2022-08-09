import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from './screens/Login';
import Books from './screens/Books';
import Trades from './screens/Trades';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
  <Router>
    <Header />
    <main>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/books" element={<Books />} />
      <Route path="/trades/:bookId" element={<Trades />} />
    </Routes>
    </main>
    <Footer />
  </Router>
  );
};

export default App;
