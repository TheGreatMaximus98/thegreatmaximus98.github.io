
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="format-detection" content="telephone=no">
    <meta name="HandheldFriendly" content="true" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="apple-mobile-web-app-title" content="Bubblez">
    <meta id="viewport" name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui,shrink-to-fit=no" />
    <meta name="apple-mobile-web-app-capable" content="yes">

    <link rel="stylesheet" href="assets/css/app.css" type="text/css" />
    <script src="https://yandex.ru/ads/system/context.js" async></script>

    <meta name="apple-mobile-web-app-title" content="Fireboy & Watergirl 1 Forest Temple">
    <title>Fireboy & Watergirl 1 Forest Temple</title>



    <script type="text/javascript">

    </script>






    <link rel="manifest" href="manifest.json">
    <link rel="icon" sizes="60x60" href="icon-60x60.png">
    <link rel="apple-touch-icon" href="icon-60x60.png">


    <script type="text/javascript">
        var gtag;
    </script>



</head>

<body style="margin: 0px; overflow:hidden;">
    <script type="text/javascript">
        window.requireNode = window.require;
        window.require = undefined;
    </script>
    <script src="bower_components/requirejs/require.js"></script>

    <div id="root">
        <div id="container"></div>
        <div id="hammer"></div>
        <div id="debug-fps" style="color:#ff0000; position: absolute; top: 0;"></div>
    </div>







    <script type="text/javascript">
        var _azerionIntegration = {
            "af": false,
            "sa": false,
            "la": false,
            "bd": 0,
            "playBtn": true,
            "cp": false
        }




        var enableAnalytics;
        var gameName = "fireboy-and-watergirl-forest-temple.min.js";


        //This all here is for cache busting;
        function addScript(src, buster, callback) {
            var s = document.createElement('script');
            s.setAttribute('src', src + '?v=' + buster);
            if (typeof callback === 'function') {
                s.onload = callback;
            }
            document.body.appendChild(s);
        }






        addScript('version.js', Date.now(), function() {



            require(["fireboy-and-watergirl-forest-temple.min.js?v=" + version]);


        });
    </script>
</body>

</html>
