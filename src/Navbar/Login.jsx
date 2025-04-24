// src/components/Login.jsx
import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import API from "../api/axios"; // Import the centralized axios instance
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"; // Google OAuth
import FacebookLogin from "react-facebook-login"; // Facebook OAuth
import GitHubLogin from "react-github-login"; // GitHub OAuth
import "../styles/Login.css"; // Import the external CSS

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/admin/login", { email, password });
      localStorage.setItem("token", response.data.token); // Save the token
      alert("Connexion réussie");
      navigate("/dashboard"); // Redirect to the dashboard after login
    } catch (error) {
      alert("Email ou mot de passe incorrect");
    }
  };

  const handleGoogleSuccess = (response) => {
    console.log("Google Login Success:", response);
    // Faire l'appel API pour connecter l'utilisateur avec le token
  };

  const handleFacebookSuccess = (response) => {
    console.log("Facebook Login Success:", response);
    // Faire l'appel API pour connecter l'utilisateur avec le token
  };

  const handleGithubSuccess = (response) => {
    console.log("GitHub Login Success:", response);
    // 
  };

  return (
    <Box className="login-container">
      <Typography variant="h5" className="login-title">
        Connexion
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-textfield"
        />
        <TextField
          label="Mot de passe"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-textfield"
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          className="login-button"
        >
          Connexion
        </Button>
      </form>

      <Box className="social-login-container">
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={(error) => console.error("Google Login Error:", error)}
            useOneTap
            theme="filled_blue"
            shape="circle"
            size="large"
            className="google-button"
          />
        </GoogleOAuthProvider>

        {/* Facebook Login */}
        <FacebookLogin
          appId="YOUR_FACEBOOK_APP_ID"
          fields="name,email,picture"
          callback={handleFacebookSuccess}
          icon={<i className="fa fa-facebook social-icon"></i>}
          cssClass="facebook-button"
        />

        {/* GitHub Login */}
        <GitHubLogin
          clientId="YOUR_GITHUB_CLIENT_ID"
          onSuccess={handleGithubSuccess}
          onFailure={(error) => console.error("GitHub Login Error:", error)}
          buttonText="Se connecter avec GitHub"
          className="github-button"
        />
      </Box>
    </Box>
  );
};

export default Login;
