import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Data from "./data";
import Notfound from "./notfound";
import Rate from "./mostrated";
import Moviehalls from "./moviehalls";
import Hallseating from "./hallseating";
import Payment from "./payment";
import About from "./Aboutus";
import Contact from "./Contactus";
import Signup from "./Signup";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="Aboutus" element={<About />} />
          <Route path="Contactus" element={<Contact />} />
          <Route path="mostrated" element={<Rate />} />
          <Route path="data" element={<Data />} />
          <Route path="signup/data" element={<Data />} />
          <Route path="moviehalls" element={<Moviehalls />} />
          <Route path="hallseating" element={<Hallseating />} />
          <Route path="moviehalls/hallseating" element={<Hallseating />} />
          <Route path="payment" element={<Payment />} />
          <Route path="Signup" element={<Signup />} />

          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
