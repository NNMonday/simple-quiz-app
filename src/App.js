import Start from "./components/screens/Start";
import { Container } from "react-bootstrap"

function App() {
  return (
    <Container fluid style={{backgroundColor: '#a5b4fb', minHeight: '100vh' , padding: '0'}}>
      <Start />
    </Container>
  );
}

export default App;
