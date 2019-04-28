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

?>
<!DOCTYPE html>
<html lang="<?php echo $lang ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="dist/css/styles.css" />
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5">
    <meta name="theme-color" content="#175676">
    <title><?php echo $translate['meta']['title'] ?></title>
</head>
<body>
<header>
    <nav class="nav nav-main-links">
        <ul class="nav-list">
            <?php for($i = 0; $i < count($mainNav); $i++) { ?>
                <li class="nav-list-item nav-main-link-item">
                    <a href="<?php echo $mainNav[$i]['href'] ?>">
                        <?php echo $mainNav[$i]['label'] ?>
                    </a>
                </li>
            <?php } ?>
        </ul>
    </nav>
    <nav class="nav nav-social-links">
        <ul class="nav-list">
            <li class="nav-list-item nav-social-link-item">
                <a href="https://dev.to/gablaroche">
                    <svg aria-hidden="true" data-prefix="fab" data-icon="dev" class="svg-inline--fa fa-dev fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"/>
                    </svg>
                </a>
            </li>
            <li class="nav-list-item nav-social-link-item">
                <a href="https://github.com/gabLaroche">
                    <svg aria-hidden="true" data-prefix="fab" data-icon="github-square" class="svg-inline--fa fa-github-square fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"/>
                    </svg>
                </a>
            </li>
            <li class="nav-list-item nav-social-link-item">
                <a href="https://twitter.com/RockLaroche">
                    <svg aria-hidden="true" data-prefix="fab" data-icon="twitter-square" class="svg-inline--fa fa-twitter-square fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"/>
                    </svg>
                </a>
            </li>
        </ul>
    </nav>
    <div class="nav-switch-lang-container" id="nav-switch-lang-container" data-current-lang="<?php echo $lang ?>">
        <span class="nav-switch-lang-item">En</span>
        <input type="checkbox" id="nav-switch-lang-toggle" />
        <label for="nav-switch-lang-toggle"><?php echo $translate['headerSection']['otherLang'] ?></label>
        <span class="nav-switch-lang-item">Fr</span>
    </div>
</header>
<main class="container">
    <section class="hero-banner">
        <h1 class="hero-banner-title"><?php echo $translate['heroBannerSection']['title'] ?></h1>
        <h2 class="hero-banner-subtitle"><?php echo $translate['heroBannerSection']['subtitle'] ?></h2>
    </section>
    <section id="projects">
        <h1><?php echo $translate['projectsSection']['title'] ?></h1>
        <ul class="project-list" id="projectList">
            <?php for($i = 0; $i < count($projects); $i++) { ?>
                <li class="project-item">
                    <a href="<?php echo $projects[$i]['link']['href'] ?>">
                        <?php echo $projects[$i]['link']['label'] ?>
                    </a>
                </li>
            <?php } ?>
        </ul>
    </section>
    <section id="skills">
        <h2><?php echo $translate['skillsSection']['title'] ?></h2>
        <ul class="skill-list">
            <?php for($i = 0; $i < count($skills); $i++) { ?>
                <li class="skill-item"><?php echo $skills[$i]['name'] ?></li>
            <?php } ?>
        </ul>
    </section>
    <section id="photography">
        <h2><?php echo $translate['photographySection']['title'] ?></h2>
        <p>
            <?php echo $translate['photographySection']['subtitle'] ?>
        </p>
        <div class="photo-list" id="photoList"></div>
    </section>
    <section id="contact">
        <form action="index.php" method="POST" target="_blank">
            <h1>Contact Me</h1>
            <div class="field">
                <label class="label" for="subject">Email Subject</label>
                <input class="input" name="subject" id="subject" type="text" />
            </div>
            <div class="field">
                <label class="label" for="subject">Email Subject</label>
                <input class="input" name="subject" id="subject" type="text" />
            </div>
            <div class="field">
                <label class="label" for="body">Message</label>
                <textarea class="textarea" name="body" id="body" ></textarea>
            </div>
            <div class="field">
                <button type="submit" class="submit">Send message</button>
            </div>
        </form>
    </section>
</main>
<footer>
    <div class="footer-content">
        <small>Copyright 2019 Gabriel Laroche</small>
        <small>All icons used came from <a href="https://fontawesome.com/license/free">Font Awesome</a></small>
    </div>
</footer>
<script src="dist/js/require.js" data-main="dist/js/main.js"></script>
</body>
</html>
