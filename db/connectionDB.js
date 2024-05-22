import mysql from "mysql2";

const connectionDB = mysql.createConnection("mysql://u8jgkrwkbpq6a2r5:xpM3UUA4CeClK7tyCocy@bfm9dseo7manmn4jqgbw-mysql.services.clever-cloud.com:3306/bfm9dseo7manmn4jqgbw");

export default connectionDB;
