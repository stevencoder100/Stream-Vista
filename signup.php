<?php
$success_alert = false;
$error_message = false;

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $email = $_POST['email'];
    $password = $_POST['pass'];

    $conn = mysqli_connect('localhost', 'root', '', 'streamvista');
    if ($conn->connect_error) {
        die('Connection Failed : ' . $conn->connect_error);
    } else {
        $check_query = "SELECT * FROM registration WHERE Email = '$email'";
        $result = mysqli_query($conn, $check_query);
        if (mysqli_num_rows($result) > 0) {
            $error_message = true;
        } 
        else {
            $sql = "INSERT INTO registration (Email, Password) VALUES('$email', '$password')";
            if ($conn->query($sql) === TRUE) {
                $success_alert = true;
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        }

        $conn->close();
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stream Vista - Watch TV Shows Online, Watch Movies Online</title>
    <link rel="stylesheet" href="s.css">
    <link rel="icon" type="image/x-icon" href="/images/web_logo.png">

<body>
    <?php
    if($success_alert){
    echo '
    <div style="padding: 10px; background-color: #c5ecb6; color: #307031; border: 1px solid #d6e9c6; border-radius: 4px; margin-bottom: 15px; padding-left:20px">
        Account created successfully! You can login now <span style="position:absolute;right:70px">Login</span>
        <a href="login.php">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height:20px; width:20px; position:absolute; right:40px;">
    <path fill="#307031" d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>
    </a>
    </div> ';
    }

    if($error_message){
        echo '
            <div style="padding: 10px; background-color: rgb(248, 212, 212); color: rgb(198, 26, 26); border: 1px solid #d6e9c6; border-radius: 4px; margin-bottom: 15px; padding-left:20px">
            Email already exists! Try another email
        </div> ';
        }
    ?>

    <div class="main">
        <div class="top">
            <div class="signin">
                signin
            </div>
        </div>
        <div class="bottom">
            <div class="welcome">
                <h1 class="main-head">
                    Unlimited Movies, TV Shows ans More</h1>
                <h4 class="main-subhead">
                    Watch anywhere. Cancel anytime
                </h4>
                <h4 class="ready">
                    Ready to watch? enter your email to restart your subscription
                 </h4>
            </div>
            <div class="form">
                <form method="POST">
                    <input type="email" class="email" name="email">
                    <input type="password" class="password" name="password">
                    <button type="submit" class="get-started" name="get-started">
                </form>
            </div>
        </div>
    </div>
</body>
</html>