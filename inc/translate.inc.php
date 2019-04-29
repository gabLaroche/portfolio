<?php
if(isset($_REQUEST['lang'])) {
    //Explicitely set as URL parameter
    $lang = $_REQUEST['lang']; //read it from the URL parameters
    $_SESSION['lang'] = $lang; //save it in the session
    setcookie('lang', $lang, time() + (3600 * 24 * 20)); //set a cookie for 20 days
}
else if(isset($_SESSION['lang'])) {
    //Fallback: read it from the session information
    $lang = $_SESSION['lang'];
}
else if(isset($_COOKIE['lang'])) {
    //Fallback: read it from the cookie
    $lang = $_COOKIE['lang'];
}
else {
    //Fallback: English is the default
    $lang = 'en';
}

$langFileStr = file_get_contents('./lang/'.$lang.'.json');
$translate = json_decode($langFileStr, true);

$mainNav = $translate['headerSection']['mainNav'];
$projects = $translate['projectsSection']['projects'];
$skills = $translate['skillsSection']['skills'];