// src/components/Profile/ProfileEdit.jsx
import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useUser } from "../../Context/UserContext";

const ProfileEdit = () => {
  const { user, setUser } = useUser();
  const [form, setForm] = useState(user);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser(form);
    alert("Profil mis à jour avec succès !");
  };

  return (
    <Paper sx={{ padding: 4, backgroundColor: "#f4f6f9", borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom>
        Modifier le Profil
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Nom"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <TextField
          label="Rôle"
          name="role"
          value={form.role}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <TextField
          label="Téléphone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
        <TextField
          label="Image URL"
          name="image"
          value={form.image}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" onClick={handleSave}>
          Sauvegarder
        </Button>
      </Box>
    </Paper>
  );
};

export default ProfileEdit;
