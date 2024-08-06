<?php
$error_message = false;

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $email = $_POST['email'];
    $password = $_POST['pass'];

    $conn = mysqli_connect('localhost', 'root', '', 'fitvibes');
    $sql = "SELECT * FROM registration WHERE email = '$email' AND Password = '$password'";
    $result = mysqli_query($conn, $sql);
    $num = mysqli_num_rows($result);

    if($num == 1){
        header("location:index.html");
    }

    else{
        $error_message = true;
    }

}
?>


<!DOCTYPE html>
<!-- Coding By CodingNepal - www.codingnepalweb.com -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stream Vista</title>
    <link rel="stylesheet" href="login.css">
    <link rel="icon" type="image/x-icon" href="/images/web_logo.png">
</head>
<body>
    <?php
       if($error_message){
        echo '
            <div style="padding: 10px; background-color: rgb(248, 212, 212); color: rgb(198, 26, 26); border: 1px solid #d6e9c6; border-radius: 4px; position:absolute; top:0; width:100%; padding-left:20px; left:0;">
            Wrong email or Password! Try again 
        </div> ';
        }
    ?>
    <nav>
        <a href="#"><img src="" alt="logo"></a>
    </nav>
    <div class="main-form">
        <h2>Sign In</h2>
        <form action="#">
            <div class="form-control">
                <input type="text" required>
                <label>Email or phone number</label>
            </div>
            <div class="form-control">
                <input type="password" required>
                <label>Password</label>
            </div>
            <button type="submit">Sign In</button>
            <div class="form-help"> 
                <div class="remember-me">
                    <input type="checkbox" id="remember-me">
                    <label for="remember-me">Remember me</label>
                </div>
                <a href="#">Need help?</a>
            </div>
        </form>
        <p>New to Stream Vista? <a href="signup.php">Sign up now</a></p>
        <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. 
            <a href="#">Learn more.</a>
        </small>
    </div>
</body>
</html>