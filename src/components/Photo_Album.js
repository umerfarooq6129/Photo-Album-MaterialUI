import React from 'react'
import { AppBar, Toolbar, Typography, Container, CssBaseline, Grid, Button, Card,CardContent,CardMedia, CardActions } from '@mui/material'
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
// import styled from '@emotion/styled';
import useStyles from "./styles"

const News_Artical = () => {
  const classes = useStyles();

  const cards = [1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <>
      <CssBaseline />
      <AppBar position='relative' color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
            News Articles
          </Typography>
          <ChromeReaderModeIcon sx={{ display: { xs: "block", sm: "none" } }} />
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container className={classes.Container}  maxWidth="sm" align="center">
            <Typography variant="h2" color="initial" gutterBottom>News Articles</Typography>
            <Typography variant="p" color="initial" gutterBottom>
              Heloo Everyone this is a photo album and I'm trying to make it available to others and others that are interested in making it available to others that are interested in making
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center" mt={1}>
                <Grid item>
                  <Button variant="contained" color="primary">
                    See new Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    See new Photos
                  </Button>
                </Grid>
                
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4} mt={2}>
            {cards.map((card)=>(
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                <CardMedia className={classes.image} title="Image" image="https://source.unsplash.com/random" />
                  <CardContent>
                    <Typography variant="h5" color="initial">
                      Heading
                    </Typography>
                    <Typography >
                      this is image and not title or description text and will be displayed
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' variant='contained' color='primary' >View</Button>
                    <Button size='small' variant='outlined' color='primary' >Edit</Button>
                  </CardActions>
                </Card>

              </Grid>
            ))}
            </Grid>
        </Container>
      </main>
    </>
  )
}

export default News_Artical
