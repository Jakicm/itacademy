<?php

$serverName = "localhost\SQLEXPRESS";
$databaseName = "example_db";
$username = "example_user";
$password = "example_password";

$connectionInfo = array(
    "UID" => $username,
    "PWD" => $password,
    "Database" => $databaseName
);

$conn = sqlsrv_connect($serverName, $connectionInfo);

if ($conn) {
    echo "Connection established.<br/>";
} else {
    echo "Connection could not be established.<br/>";
    die(print_r(sqlsrv_errors(), true));
}
