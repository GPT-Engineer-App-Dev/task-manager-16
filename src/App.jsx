import { Box, Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import TodoList from "./pages/TodoList.jsx";
function App() {
  return (
    <Box bg="gray.100" minH="100vh">
      <Container maxW="container.md">
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/todos" element={<TodoList />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
