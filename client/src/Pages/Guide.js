import React from "react";
import { Nav, Tab, Container, Row, Col } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';

import { rainbow } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Guide = () => {
  return(
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row  className='mt-5 p-3'>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-5">
                <Tab.Pane eventKey="first">
                  <img src='https://www.codemotion.com/magazine/wp-content/uploads/2021/07/JavaScript-Frameworks-1024x576.jpg' alt='prog1'>
                  </img>
                  <SyntaxHighlighter language="cpp" style={rainbow} showLineNumbers={true} wrapLines={true}>
      {`#include <iostream>               // подключаем заголовочный файл iostream
 
 int main()                          // определяем функцию main
 {                                   // начало функции
     std::cout << "Hello World!";  // выводим строку на консоль
     return 0;                       // выходим из функции
 }                                   // конец функции`}
    </SyntaxHighlighter>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src='https://www.codemotion.com/magazine/wp-content/uploads/2021/07/JavaScript-Frameworks-1024x576.jpg'>
                  </img>
                    <p>
                      Ffdffkdoffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src='https://www.codemotion.com/magazine/wp-content/uploads/2021/07/JavaScript-Frameworks-1024x576.jpg'>
                  </img>
                    <p>
                      Ffdffkdoffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src='https://www.codemotion.com/magazine/wp-content/uploads/2021/07/JavaScript-Frameworks-1024x576.jpg'>
                  </img>
                    <p>
                      Ffdffkdoffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img src='https://www.codemotion.com/magazine/wp-content/uploads/2021/07/JavaScript-Frameworks-1024x576.jpg'>
                  </img>
                    <p>
                      Ffdffkdoffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
);
};

export default Guide;
