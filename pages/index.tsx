import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import useStyles from "../components/useStyles";

export default function Home() {
  const classes = useStyles();

  return (
    <Container style={{ marginTop: "24px" }} maxWidth="xl">
      <TextField
        required
        label="Workflow name"
        defaultValue="CI"
        variant="filled"
      />
    </Container>
  );
}
