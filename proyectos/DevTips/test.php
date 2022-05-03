<?php
$mysqli = new mysqli("145.14.151.101", "u886720817_Dixho", "@aA12345678.", "u886720817_test1");
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT * FROM tabladetest WHERE user = ".$_GET['user'];

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['user']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($cid, $cname);
$stmt->fetch();
$stmt->close();

echo "{
    \"cid\": \"$cid\",
    \"cname\": \"$cname\"
    }";


// echo "<table>";
// echo "<tr>";
// echo "<th>CustomerID</th>";
// echo "<td>" . $cid . "</td>";
// echo "<th>CompanyName</th>";
// echo "<td>" . $cname . "</td>";
// echo "</table>";
?> 