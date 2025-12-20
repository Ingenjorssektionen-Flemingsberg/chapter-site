import { Container, Button, Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import NewsPost from "../components/news/NewsPost";
// import { useNews } from "../contexts/";
import newsBanner from "../assets/news.webp";
import { MOCK_NEWS } from "../config/mock";
import type { NewsPostType } from "../types/news";
import { useInfiniteScroll } from "../components/news/useInfiniteScroll";
import { useState } from "react";
import NewsPostSkeleton from "../components/news/NewsPostSkeleton";

export default function News() {
  // const { news, getMoreNews, hasMore } = useNews();
  const news = MOCK_NEWS;
  const hasMore = true;
  const [isLoading, setIsLoading] = useState(false);

  const getMoreNews = () => {
    if (isLoading) return;

    setIsLoading(true);

    setTimeout(() => {
      // append mock news here
      setIsLoading(false);
    }, 5000);
  };
  const sentinelRef = useInfiniteScroll(getMoreNews, hasMore && !isLoading);

  return (
    <Container
      disableGutters
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        top: 0,
      }}
    >
      <HeroBanner
        image={newsBanner}
        height={{ xs: "40vh", md: "60vh" }}
        subtitle="Kolla in senaste"
        title="Nyheter"
      />

      <Box
        sx={{
          my: 6,
          mx: "auto",
        }}
      >
        {news.map((post: NewsPostType) => (
          <NewsPost key={post.id} post={post} />
        ))}

        {isLoading &&
          Array.from({ length: 2 }).map((_) => (
            <NewsPostSkeleton key={`skeleton`} />
          ))}

        {/* Sentinel */}
        <Box ref={sentinelRef} sx={{ height: 1 }} />
      </Box>
    </Container>
  );
}
