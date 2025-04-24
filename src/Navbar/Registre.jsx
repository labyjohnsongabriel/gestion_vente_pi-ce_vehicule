// src/components/Register.jsx
import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import API from "../api/axios"; // Import the centralized axios instance

const Registre = () => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/admin/register", {
        nom,
        email,
        password,
      });
      alert(response.data.message);
    } catch (error) {
      alert("Erreur lors de l'inscription");
    }
  };

  return (
    <div>
      <Typography variant="h4">Inscription</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nom"
          fullWidth
          margin="normal"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Mot de passe"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" fullWidth>
          Inscription
        </Button>
      </form>
    </div>
  );
};

export default Registre;
