
<html>
<head>
	<title>Recent Trips</title>
</head>
<body>
Departure : <?php echo htmlspecialchars($_POST["departing"]); ?><br>
    Return : <?php echo $_POST["returning"]; ?><br>
    Place : <?php echo $_POST["place"]; ?>
</body>
</html>