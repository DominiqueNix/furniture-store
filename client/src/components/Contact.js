import { Box, Card, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import GroupsIcon from "@mui/icons-material/Groups";
import PlaceIcon from "@mui/icons-material/Place";
import RateReviewIcon from "@mui/icons-material/RateReview";
import Nav from "./Nav";

export const Contact = () => {
  const infoCards = [
    {
      title: "Customer Support",
      icon: <ChatBubbleOutlineIcon sx={{ fontSize: "2rem" }} />,
      description: "Speak to our customer support team.",
      link: "support@fakefurniture.com",
    },
    {
      title: "Sales",
      icon: <GroupsIcon sx={{ fontSize: "2rem" }} />,
      description: "Our professionals are here to help.",
      link: "salesgroup@fakefurniture.com",
    },
    {
      title: "Vist Us",
      icon: <PlaceIcon sx={{ fontSize: "2rem" }} />,
      description: "Find a store near you.",
      link: "View on google maps",
    },
    {
      title: "Leave a review",
      icon: <RateReviewIcon sx={{ fontSize: "2rem" }} />,
      description: "Let us know how we're doing",
      link: "fakestore@rating.com",
    },
  ];

  return (
    <main>
      <Nav />
      <div
        style={{
          height: "85vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        {infoCards.map((card, idx) => (
          <Card
            sx={{
              height: "275px",
              width: "275px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "10px",
            }}
            elevation={6}
          >
            <Box
              sx={{
                margin: "10px 0",
                border: "solid 1px gray",
                borderRadius: "10px",
                padding: "8px",
                width: "fit-content",
              }}
            >
              {card.icon}
            </Box>
            <Box>
              <Typography sx={{ margin: "10px 0" }} variant="h6">
                {card.title}
              </Typography>
              <Typography sx={{ fontWeight: "300", margin: "10px 0" }}>
                {card.description}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  margin: "10px 0",
                }}
              >
                {card.link}
              </Typography>
            </Box>
          </Card>
        ))}
      </div>
    </main>
  );
};
