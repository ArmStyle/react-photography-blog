import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      {/*exact ใช้เพื่อกำหนดว่าต้องเป็นตัวใน path เท่านั้น*/}
      <Navbar />
      <Banner />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post/:title" component={Post} />
          {/* ไม่ต้องใส่ path ถ้าเกิด path มีข้อผิดพลาดจะมาที่หน้านี้ทันที */}
          {/* <Route component={Error} /> */}
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
