import { getSingleNews } from "@/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const NewsDetailPage = async ({ params }) => {
  const { data: news } = await getSingleNews(params.newsId);
  console.log(news);
  return (
    <Box className="my-5">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Image
              width={800}
              height={500}
              src={news.thumbnail_url}
              alt="news"
            />
            <Grid container spacing={2} className="mt-2">
              <Grid item xs={6}>
                <Image
                  width={800}
                  height={800}
                  src={news.image_url}
                  alt="news"
                />
              </Grid>
              <Grid item xs={6}>
                <Image
                  width={800}
                  height={800}
                  src={news.image_url}
                  alt="news"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" component="h2">
              {news.title}
            </Typography>
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              <Avatar alt="author" src={news.author.img} />
              <Typography>By {news.author.name}</Typography>
              <Typography>Publish: {news.author.published_date}</Typography>
            </Box>
            <Typography
              style={{
                textAlign: "justify",
                whiteSpace: "pre-line",
                margin: "10px 0px",
                color: "gray",
              }}
              variant="body1"
              component="p"
            >
              {news.details}
            </Typography>

            <Typography variant="h6">
              ``Many desktop publishing packages an web page editors now use as
              their default model text!
            </Typography>
            <Typography variant="h6">-- Md Mahfujur Rahman</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsDetailPage;
