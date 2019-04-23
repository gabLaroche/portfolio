<?php
@include ""
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>Gabriel Laroche - Contact me</title>
</head>
<body>
<my-navigation></my-navigation>
<main>
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
<my-footer></my-footer>
<script src="https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
<script type="module" src="../assets/js/modules/my-navigation.js"></script>
<script type="module" src="../assets/js/modules/my-footer.js"></script>
<script type="text/javascript" src="../assets/js/validation.js"></script>
</body>
</html>