import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import topNews from "@/assets/media/news1.png";

const LatestNews = () => {
  return (
    <Box className="my-5">
      <Card sx={{}}>
        <CardMedia>
          <Image src={topNews} width={800} alt="top news" />
        </CardMedia>

        <CardContent>
          <p className="w-fit bg-red-600 p-2 text-white rounded-lg my-3">
            Technology
          </p>
          <Typography gutterBottom variant="h5" component="div">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across
          </Typography>
          <Typography gutterBottom>Lizards are a widespread</Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          <Card sx={{}}>
            <CardMedia>
              <Image src={topNews} width={800} alt="top news" />
            </CardMedia>

            <CardContent>
              <p className="w-fit bg-red-600 p-2 text-white rounded-lg my-3">
                Technology
              </p>
              <Typography gutterBottom variant="h5" component="div">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across
              </Typography>
              <Typography gutterBottom>Lizards are a widespread</Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{}}>
            <CardMedia>
              <Image src={topNews} width={800} alt="top news" />
            </CardMedia>

            <CardContent>
              <p className="w-fit bg-red-600 p-2 text-white rounded-lg my-3">
                Technology
              </p>
              <Typography gutterBottom variant="h5" component="div">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across
              </Typography>
              <Typography gutterBottom>Lizards are a widespread</Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{}}>
            <CardMedia>
              <Image src={topNews} width={800} alt="top news" />
            </CardMedia>

            <CardContent>
              <p className="w-fit bg-red-600 p-2 text-white rounded-lg my-3">
                Technology
              </p>
              <Typography gutterBottom variant="h5" component="div">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across
              </Typography>
              <Typography gutterBottom>Lizards are a widespread</Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{}}>
            <CardMedia>
              <Image src={topNews} width={800} alt="top news" />
            </CardMedia>

            <CardContent>
              <p className="w-fit bg-red-600 p-2 text-white rounded-lg my-3">
                Technology
              </p>
              <Typography gutterBottom variant="h5" component="div">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across
              </Typography>
              <Typography gutterBottom>Lizards are a widespread</Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LatestNews;
