import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      {/*exact ใช้เพื่อกำหนดว่าต้องเป็นตัวใน path เท่านั้น*/}
      {/* <NavBar /> */}
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />

          {/* ไม่ต้องใส่ path ถ้าเกิด path มีข้อผิดพลาดจะมาที่หน้านี้ทันที */}
          {/* <Route component={Error} /> */}
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
