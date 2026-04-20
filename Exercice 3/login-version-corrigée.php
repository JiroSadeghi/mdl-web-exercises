<?php
session_start();

// Si l'utilisateur est déjà connecté, redirection vers le profil
if (isset($_SESSION['alogin'])) {
    header('Location: profile.php');
    exit;
}

if (isset($_POST['login'])) {
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';

    // Vérification de base des champs
    if ($username === '' || $password === '') {
        echo "<script>alert('Veuillez remplir tous les champs / Please fill in all fields');</script>";
    } else {
        $sql = "SELECT id, username, password FROM users WHERE username = :username LIMIT 1";
        $query = $dbh->prepare($sql);
        $query->bindParam(':username', $username, PDO::PARAM_STR);
        $query->execute();

        $user = $query->fetch(PDO::FETCH_OBJ);

        if ($user && password_verify($password, $user->password)) {
            // Sécurisation de la session après connexion
            session_regenerate_id(true);
            $_SESSION['alogin'] = $user->id;

            header('Location: profile.php');
            exit;
        } else {
            echo "<script>alert('Identifiant ou mot de passe incorrect / Incorrect username or password');</script>";
        }
    }
}
?>
