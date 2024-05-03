import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  List,
  ListItem,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const toast = useToast();

  const handleAddTask = () => {
    if (task.trim() === "") {
      toast({
        title: "Task cannot be empty",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <Container maxW="container.md">
      <Box mt={8}>
        <FormControl>
          <FormLabel>Add Task</FormLabel>
          <Input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a new task"
          />
        </FormControl>
        <Button mt={4} colorScheme="blue" onClick={handleAddTask}>
          Add Task
        </Button>
      </Box>
      <Box mt={8}>
        <Text fontSize="xl" fontWeight="bold">
          Tasks
        </Text>
        <List mt={4}>
          {tasks.map((task, index) => (
            <ListItem key={index}>{task}</ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default TodoList;