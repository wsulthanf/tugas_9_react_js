import React, { Component } from 'react'
import './App.css';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Container, Row, Col, Breadcrumb, Tab, Tabs, Spinner, Table, ProgressBar, Pagination } from 'react-bootstrap'
import Datalist from './parts/data'
import Popbutton from './parts/popover'
import Collapse from './parts/collapse'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Akses Sport</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#berita">Berita</Nav.Link>
            <Nav.Link href="#livescore">Live Score</Nav.Link>
            <NavDropdown title="Piala & Liga" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Liga Inggris</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Liga Indonesia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Serie A</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#transferpemain">Transfer Pemain</Nav.Link>
            <Nav.Link href="#tim">Tim</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <Container>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Liga Inggris
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          <Row>
            <Col>
              <Container>
                <Row>
                  <Col><h3>Rumor Transfer Pemain</h3></Col>
                  <Col>
                    <Spinner className="sr-only" animation="border" variant="success" />
                    <Spinner className="sr-only" animation="grow" variant="success" />
                  </Col>
                </Row>
              </Container>
              <br/>
              <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="Semua Transfer" title="Semua Transfer">
                  <br/>
                  <Table responsive="sm">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Nama Pemain</th>
                          <th>Tim</th>
                          <th>Transfer</th>
                          <th>Proses Transfer</th>
                        </tr>
                      </thead>
                      {Datalist.map((data, index) => (
                      <tbody key={index} data={data}>
                        <tr>
                          <td>{data.number}</td>
                          <td>{data.name}</td>
                          <td>{data.team}</td>
                          <td>{data.transfer}</td>
                          <td><ProgressBar striped animated now={data.now} label={`${data.now}%`} /></td>
                        </tr>
                      </tbody>
                      ))}
                  </Table>
                  <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>
                  <Popbutton />
                  <Collapse />
                </Tab>
                <Tab eventKey="Liga Primer Inggris" title="Liga Primer Inggris">
                  {/* <Sonnet /> */}
                </Tab>
                <Tab eventKey="Divisi Primera" title="Divisi Primera">
                  {/* <Sonnet /> */}
                </Tab>
                <Tab eventKey="Bundesliga" title="Bundesliga">
                  {/* <Sonnet /> */}
                </Tab>
                <Tab eventKey="Liga 1 Indonesia" title="Liga 1 Indonesia">
                  {/* <Sonnet /> */}
                </Tab>
              </Tabs>
              
            </Col>
          </Row>
        </Container>
        <br/>
      </div>
    )
  }
}
