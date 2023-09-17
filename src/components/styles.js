import { styled } from "@mui/material/styles";

const useStyles = styled((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  cardGrid: {
    padding: '20px 0'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  image: {
    paddingTop: '56.25%',
  }
}));

export default useStyles;
