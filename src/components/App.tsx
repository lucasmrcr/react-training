import React, {FC, lazy, Suspense} from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AdminBase from './pages/admin/AdminBase';


const Resume = lazy(() => import('./pages/resume/Resume'));
const Admin = lazy(() => import('./pages/admin/AdminBase'));

const App: FC = () => <>
  <Router>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">CV</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Suspense fallback={<div>Chargement...</div>}>
      <Routes>
        <Route path="/admin" element={<AdminBase />}/>
        <Route path="/" element={<Resume/>}/>
      </Routes>
    </Suspense>
  </Router>
</>;
export default App;
