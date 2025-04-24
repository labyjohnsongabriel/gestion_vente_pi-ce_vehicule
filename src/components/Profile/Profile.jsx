// src/components/Profile/Profile.jsx
import React from "react";
import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useUser } from "../../Context/UserContext";

const Profile = () => {
  const { user } = useUser();

  if (!user) return <Typography>Chargement du profil...</Typography>;

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f4f6f9", borderRadius: 2 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 600, color: blue[700] }}
        gutterBottom
      >
        Profil
      </Typography>

      <Card sx={{ p: 3, borderRadius: 3, boxShadow: 6 }}>
        <CardContent>
          <Avatar
            sx={{
              width: 120,
              height: 120,
              marginBottom: 2,
              border: `4px solid ${blue[500]}`,
            }}
            alt="Photo de profil"
            src={user.image || "/static/images/avatar/1.jpg"}
          />
          <Typography variant="h5" sx={{ fontWeight: 600 }} gutterBottom>
            {user.name}
          </Typography>
          <Typography variant="body1">
            <strong>Rôle :</strong> {user.role}
          </Typography>
          <Typography variant="body2">
            <strong>Email :</strong> {user.email}
          </Typography>
          <Typography variant="body2">
            <strong>Téléphone :</strong> {user.phone}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
