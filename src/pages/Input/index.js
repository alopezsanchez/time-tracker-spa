import { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { fetchUsers } from "../../services/api";
import Form from "./components/Form";

export default function InputPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((users) => setUsers(users));
  }, []);

  return (
    <Paper elevation={3}>
      <Form users={users} />
    </Paper>
  );
}
