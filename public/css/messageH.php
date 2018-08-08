<?php
require("header.php");
require("checkUser.php");
include 'conn.php';
?>
<?php
	$lang = mysqli_real_escape_string($dbc, $_POST['lang']);
	switch ($lang) {
			case 'PHP':
				$lang = 'PHP';
				break;

			case 'JavaScript':
				$lang = 'JS';
				break;

			case 'C++':
				$lang = 'C++';
				break;

			case 'C#':
				$lang = 'C#';
				break;

			case 'C':
				$lang = 'C';
				break;

			case 'Java':
				$lang = 'Java';
				break;

			case 'Go':
				$lang = 'Go';
			break;

			case 'Python':
				$lang = 'Python';
			break;
		}
	$question = mysqli_real_escape_string($dbc, $_POST['question']);
	$desc = mysqli_real_escape_string($dbc, $_POST['desc']);
	$user = mysqli_real_escape_string($dbc, $_POST['user']);

	$uname = mysqli_real_escape_string($dbc, $_POST['uname']);
	$fname = mysqli_real_escape_string($dbc, $_POST['fname']);
	$mail = mysqli_real_escape_string($dbc, $_POST['mail']);
	$gender = mysqli_real_escape_string($dbc, $_POST['gender']);
	$pwd = mysqli_real_escape_string($dbc, $_POST['pwd']);
	$dob = mysqli_real_escape_string($dbc, $_POST['dob']);
	$addr = mysqli_real_escape_string($dbc, $_POST['addr']);
	$country = mysqli_real_escape_string($dbc, $_POST['country']);
	$questions = mysqli_real_escape_string($dbc, $_POST['questions']);
	$comments = mysqli_real_escape_string($dbc, $_POST['comments']);

	$sql = "INSERT INTO question(lang, ques, descr, user_id) values('$lang', '$question', '$desc', '$user')";
	$result = $dbc->query($sql);

	$sql = "SELECT * FROM question WHERE user_id='$user'";
	$result = $dbc->query($sql);
	$questions = mysqli_num_rows($result);

	$sql = "UPDATE user SET user_id = '$user',uname = '$uname',fname = '$fname',mail = '$mail',gender = '$gender',pwd = '$pwd',dob = '$dob',addr = '$addr',country = '$country',questions = '$questions',comments = '$comments'
	WHERE user_id = '$user'";

	$result = $dbc->query($sql);

	header("location: admin/home.php");
?>
<?php require("footer.php")?>
