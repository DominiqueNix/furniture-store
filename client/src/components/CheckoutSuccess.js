import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { Button, Card, Typography } from "@mui/material";
import Nav from "./Nav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CheckoutSucceess = ({ total }) => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <main>
      <Nav />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "85vh",
        }}
      >
        <Card
          elevation={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px",
          }}
        >
          <CheckCircleOutlineOutlinedIcon
            color="success"
            sx={{ height: "50px", width: "50px" }}
          />
          <Typography sx={{ margin: "20px 0" }} variant="h4">
            Thank you for your payment of ${total}
          </Typography>
          <Button variant="contained" onClick={() => navigate("/items")}>
            Continue Shopping?
          </Button>
        </Card>
      </div>
    </main>
  );
};
