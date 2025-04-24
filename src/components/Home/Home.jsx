import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";
import v1 from "../../assets/image/v1.jpg"; // Assuming v1 is a local image
import v2 from "../../assets/image/v2.jpg"; // Assuming v2 is a local image
import v3 from "../../assets/image/v3.jpg"; // Assuming v3 is a local image
import v4 from "../../assets/image/v4.jpg"; // Assuming v4 is a local image
import v5 from "../../assets/image/v5.jpg"; // Assuming v5 is a local image
import v6 from "../../assets/image/v6.jpg"; // Assuming v6 is a local image
import "../../App.css"; // Assuming you have some global styles
import "../../styles/Home.css";
export default function Home() {
  const products = [
    {
      id: 1,
      name: "Plaquettes de frein",
      description:
        "Plaquettes de frein en céramique, durables et silencieuses. Compatibles avec tous les véhicules modernes.",
      price: "50€",
      image: v1,
    },
    {
      id: 2,
      name: "Batterie voiture",
      description:
        "Batterie 12V 70Ah, performance maximale garantie pendant 3 ans.",
      price: "120€",
      image: v2,
    },
    {
      id: 3,
      name: "Pneus Premium",
      description:
        "Pneus Michelin pour conduite en toutes saisons, excellente adhérence sur route mouillée.",
      price: "200€",
      image: v3,
    },
    {
      id: 4,
      name: "Huile moteur 5W30",
      description:
        "Lubrification optimale, réduit l'usure du moteur. Convient pour moteurs diesel et essence.",
      price: "30€",
      image: v4,
    },
    {
      id: 5,
      name: "Filtre à air",
      description:
        "Améliore les performances moteur, filtre 99% des particules nocives.",
      price: "20€",
      image: v5,
    },
    {
      id: 6,
      name: "Ampoules LED H7",
      description: "Éclairage puissant et longue durée, installation facile.",
      price: "35€",
      image: v6,
    },
  ];

  return (
    <Box
      className="home-container"
      sx={{ padding: "2rem", backgroundColor: "#f4f6f8" }}
    >
      <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
        🚗 Boutique de Pièces Auto
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary">
        Découvrez nos meilleures offres pour entretenir votre véhicule.
      </Typography>

      <Grid container spacing={4} sx={{ marginTop: "2rem" }}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: "100%", // Ensure all cards have the same height
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between", // Align content properly
                  boxShadow: 3,
                  borderRadius: "16px",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.03)" },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={product.image}
                  alt={product.name}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, minHeight: "60px" }}
                  >
                    {product.description}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ marginTop: "1rem" }}
                  >
                    {product.price}
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2,
                    backgroundColor: "#007bff",
                    color: "#fff",
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "#0056b3" },
                  }}
                >
                  Acheter maintenant
                </Button>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
