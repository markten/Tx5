<?
session_start();
if(!session_is_registered(myusername)){
header("location:main_login.php");
}
?>

<html>
<body>
<? include("./webapp.html"); ?>
</body>
</html>
