import { getCategoryNews } from "@/utils/getCategoryNews";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const DynamicNewsPage = async ({ searchParams }) => {
  const { data } = await getCategoryNews(searchParams.category);
  console.log(data);
  return (
    <div className="my-5">
      <h1>
        Total <strong>{searchParams.category}</strong> News: {data.length}
      </h1>
      <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.map((news) => (
          <Grid key={news.id} item xs={6}>
            <Card sx={{}}>
              <CardMedia>
                <Image
                  src={news.thumbnail_url}
                  width={800}
                  height={100}
                  alt="top news"
                />
              </CardMedia>

              <CardContent>
                <p className="w-fit bg-red-600 p-2 text-white rounded-lg my-3">
                  {news.category}
                </p>
                <Typography gutterBottom variant="h5" component="div">
                  {news.title}
                </Typography>
                <Typography gutterBottom>
                  By {news.author.name}- {news.author.published_date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {news.details}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DynamicNewsPage;
