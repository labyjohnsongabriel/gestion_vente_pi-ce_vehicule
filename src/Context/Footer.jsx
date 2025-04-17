import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Divider } from "@mui/material";
import "../App.css"; // si vous avez une feuille de style

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Section À propos */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">À propos</h5>
            <p>
              HOSTASH est une plateforme de gestion professionnelle qui vous
              aide à organiser et suivre vos activités efficacement.
            </p>
          </div>

          {/* Liens rapides */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Liens utiles</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white text-decoration-none"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/a-propos"
                  className="text-white text-decoration-none"
                >
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Suivez-nous</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-5">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white fs-5">
                <FaTwitter />
              </a>
              <a href="#" className="text-white fs-5">
                <FaInstagram />
              </a>
              <a href="#" className="text-white fs-5">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <Divider className="bg-light my-3" />

        {/* Copyright */}
        <div className="text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} <strong>HOSTASH</strong>. Tous
            droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
