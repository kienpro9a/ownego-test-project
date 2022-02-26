import RightSide from "./components/rightSide";
import LeftSide from "./components/leftSide";
import React, { useState } from 'react'
import { Row, Col } from 'antd';
import 'antd/dist/antd.min.css'



function App() {
  const [currentStore, setCurrentStore] = useState(0);
  return (
    <>
      <Row>
        <Col className="gutter-row" xxl={4} xl={5} lg={6} md={7} sm={24} xs={24}>
          <LeftSide setCurrentStore={setCurrentStore} />
        </Col>
        <Col className="gutter-row" xxl={20} xl={19} lg={18} md={17} sm={24} xs={24}>
          <RightSide currentStore={currentStore} />
        </Col>
      </Row>
    </>
  );
}

export default App;
