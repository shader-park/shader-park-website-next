export const minimalRendererIndexHTML = `<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Shader Park</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/styles.css">
    </head>

    <body>
        <canvas class="my-canvas"></canvas>
        <script type="module">
            import { sculptToMinimalRenderer } from 'https://unpkg.com/shader-park-core/dist/shader-park-core.esm.js';

            fetch('./spCode.txt')
            .then(response => response.text())
            .then(spCode => {
                let canvas = document.querySelector('.my-canvas');
                // This converts your Shader Park code into a shader and renders it to the my-canvas element
                sculptToMinimalRenderer(canvas, spCode);
            });
        </script>
    </body>
</html>
`;

export const shaderParkStartCode = `rotateY(mouse.x * PI / 2 + time * .5);
rotateX(mouse.y * PI / 2);
metal(.5);
shine(.4);
color(getRayDirection() + .2);
rotateY(getRayDirection().y * 4 + time);
boxFrame(vec3(.4), .02);
expand(.02);
blend(nsin(time) * .6);
sphere(.2);   
`;

export const minimalRendererCSS = `

body {
    font-family: helvetica, arial, sans-serif;
    width: 100vw; 
    height: 100vh; 
    margin : 0px; 
    padding : 0px; 
    border : 0px; 
}

canvas {
    width: 100%;
    height: 100%;
    margin : 0px;
    padding : 0px;
    border : 0px;
    background-color : transparent;
}
`