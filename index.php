<?php 
$GLOBALS["messages"] = array (
    'en' => array (
        'title' => 'Title'
    ),

    'fr' => array (
        'title' => 'Titre'
    )
);

function localizeString($stringToLocalize) {
    $locale = $_SESSION["locale"];
        
    if (isset($GLOBALS["messages"][$locale][$stringToLocalize])) {
        return $GLOBALS["messages"][$locale][$stringToLocalize];
    } else {
        error_log("l10n error: locale: "."$locale, message:'$stringToLocalize'");
    }
    }

session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
</head>
<body>
	<header>
		<nav>
			<ul>
				<li><a href=""></a></li>
			</ul>
		</nav>
	</header>
	<main>
		<section>
			<h1>Hi! I'm Gabriel Laroche</h1>
			<h2>I'm a front-end Web developer that also dabbles in Back-end development</h2>
        </section>
        <section>
            <h2>My personal projects</h2>
            <ul>
                <li>
                    <picture></picture>
                    <a href="">Internet Explorer 11 end of support Countdown</a>
                    <p>
                        
                    </p>
                </li>
                <li>
                    <picture></picture>
                    <a href="">Don't press my buttons!</a>
                    <p>
                        I love making buttons and I wanted an excuse to experiment with css variables, so I made this.
                    </p>
                </li>
                <li>
                    <picture></picture>
                    <a href="#">This</a>
                    <p>
                        When making this website I didn't want to go back to basics and challenge my self by 
                        making a great website without using any of the bells and whistles that I'm used to.
                        That's why I only used plain old HTML(5), CSS(3) and a tiny bit of php to handle the translations
                        no Javascript, CSS preprocessor. More on that journey <a href="dev.to">Here</a>
                    </p>
                </li>
            </ul>
        </section>
        <section>
            <h2>My Skills</h2>
            <div>
                <h3>Front-end skills</h3>
                <ul>
                    <li>HTML/HTML5</li>
                    <li>CSS/CSS3/SASS</li>
                    <li>Javascript (ES6)</li>
                </ul>
                <p>I didn't list any Javascript framework here, because I think with a good base in javascript, you can learn any framework</p>
            </div>
            <div>
                <h3>Back-end skills</h3>
                <ul>
                    <li>PHP</li>
                    <li>MySQL</li>
                </ul>
			</div>
        </section>
	</main>
	<footer>
		<small>Copyright 2019 Gabriel Laroche</small>
	</footer>
</body>
</html>