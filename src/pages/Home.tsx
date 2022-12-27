import { Box } from "@mui/material";
import Header from "../components/Header";

const Home = () => {
  return (
    <Box m="2rem">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome Prakhar" />
      </Box>
    </Box>
  );
};

export default Home;
