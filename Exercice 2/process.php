<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $age = $_POST['age'];

    // Vérifier champs remplis
    if (empty($nom) || empty($email) || empty($age)) {
        echo "Tous les champs sont obligatoires.";
        exit;
    }

    // Vérifier email valide
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Adresse e-mail invalide.";
        exit;
    }

    // Vérifier âge est un nombre
    if (!is_numeric($age)) {
        echo "L'âge doit être un nombre.";
        exit;
    }

    echo "Formulaire validé avec succès.";

}

?>
