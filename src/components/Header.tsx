import { useTheme, Typography, Box, Theme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const theme = useTheme() as Theme;
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="2rem">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "1rem" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
