<?php
/**
 * Created by PhpStorm.
 * User: Vincent
 * Date: 12/01/2015
 * Time: 16:16
 */
session_start();
session_unset();
session_destroy();
header("Location: ../index.php?page=index.tpl");

?>