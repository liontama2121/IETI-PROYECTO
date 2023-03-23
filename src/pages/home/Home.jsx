import { Box, Button, Container, Grid, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box>
      {/* Hero section */}
      <Box sx={{ backgroundColor: 'background.paper', py: 8 }}>
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            Bienvenidos a mi sitio web
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus libero et mauris ullamcorper venenatis.
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Comenzar
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Aprender más
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Main section */}
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
          Acerca de nosotros
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus libero et mauris ullamcorper venenatis.
          Integer fermentum elit vel dolor aliquet viverra. Nullam sagittis sodales faucibus. Mauris euismod sem at nibh
          luctus imperdiet. Nam consectetur bibendum nisi, ut suscipit odio elementum sed. Mauris a luctus velit.
        </Typography>
      </Container>
    </Box>
  );
};

export default Home;
