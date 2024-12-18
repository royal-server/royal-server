skrypt base64
```
KGZ1bmN0aW9uKCkgewogICAgICAgIC8vIEZ1bmN0aW9uIHRvIGR5bmFtaWNhbGx5IGFkZCBhIGNhbnZhcyBlbGVtZW50IHRvIHRoZSBib2R5CiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImNhbnZhcyIpOwogICAgICAgIGNhbnZhcy5pZCA9ICJjYW52YXMiOwogICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTsKCiAgICAgICAgLy8gU3R5bGUgdGhlIGNhbnZhcyB0byBjb3ZlciB0aGUgZnVsbCBwYWdlIGFzIGEgYmFja2dyb3VuZAogICAgICAgIGNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICJmaXhlZCI7CiAgICAgICAgY2FudmFzLnN0eWxlLnRvcCA9ICIwIjsKICAgICAgICBjYW52YXMuc3R5bGUubGVmdCA9ICIwIjsKICAgICAgICBjYW52YXMuc3R5bGUuekluZGV4ID0gIi0xIjsKICAgICAgICBjYW52YXMuc3R5bGUucG9pbnRlckV2ZW50cyA9ICJub25lIjsKICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSAiMTAwJSI7CiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9ICIxMDAlIjsKCiAgICAgICAgLy8gRnVuY3Rpb24gdG8gbG9hZCBhbmQgYXBwbHkgdGhlIGNhbnZhcyBjb250ZW50IGZyb20gdGhlIGV4dGVybmFsIFVSTAogICAgICAgIGZ1bmN0aW9uIGxvYWRDYW52YXNDb250ZW50KCkgewogICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoIjJkIik7CgogICAgICAgICAgICAvLyBGZXRjaCB0aGUgY29udGVudCBmcm9tIHRoZSBnaXZlbiBVUkwKICAgICAgICAgICAgZmV0Y2goImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Eck1pbmV3b3JkL0FydGVmYWN0LUJvb3N0LUFjdGl2ZS9yZWZzL2hlYWRzL21haW4vc25vd3kuY2FudmEiKQogICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKQogICAgICAgICAgICAgICAgLnRoZW4oc2NyaXB0Q29udGVudCA9PiB7CiAgICAgICAgICAgICAgICAgICAgLy8gRXhlY3V0ZSB0aGUgbG9hZGVkIGNvbnRlbnQgaW5zaWRlIHRoZSBjYW52YXMKICAgICAgICAgICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgic2NyaXB0Iik7CiAgICAgICAgICAgICAgICAgICAgc2NyaXB0LnRleHQgPSBzY3JpcHRDb250ZW50OwogICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTsgLy8gQXBwZW5kcyB0aGUgc2NyaXB0IHRoYXQgZGVmaW5lcyB0aGUgY2FudmFzIGRyYXdpbmcgbG9naWMKICAgICAgICAgICAgICAgIH0pCiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gewogICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIkVycm9yIGxvYWRpbmcgY2FudmFzIGNvbnRlbnQ6IiwgZXJyb3IpOwogICAgICAgICAgICAgICAgfSk7CiAgICAgICAgfQoKICAgICAgICAvLyBTZXQgY2FudmFzIHNpemUgdG8gY292ZXIgdGhlIGVudGlyZSBkb2N1bWVudAogICAgICAgIAoKICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBjYW52YXMgY29udGVudAogICAgICAgIGxvYWRDYW52YXNDb250ZW50KCk7CgogICAgICAgIAogICAgfSkoKTs
```

```
<script>
    (function() {
        // Function to dynamically add a canvas element to the body
        var canvas = document.createElement("canvas");
        canvas.id = "canvas";
        document.body.appendChild(canvas);

        // Style the canvas to cover the full page as a background
        canvas.style.position = "fixed";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.zIndex = "-1";
        canvas.style.pointerEvents = "none";
        canvas.style.width = "100%";
        canvas.style.height = "100%";

        // Function to load and apply the canvas content from the external URL
        function loadCanvasContent() {
            var ctx = canvas.getContext("2d");

            // Fetch the content from the given URL
            fetch("https://raw.githubusercontent.com/DrMineword/Artefact-Boost-Active/refs/heads/main/snowy.canva")
                .then(response => response.text())
                .then(scriptContent => {
                    // Execute the loaded content inside the canvas
                    var script = document.createElement("script");
                    script.text = scriptContent;
                    document.body.appendChild(script); // Appends the script that defines the canvas drawing logic
                })
                .catch(error => {
                    console.error("Error loading canvas content:", error);
                });
        }

        // Set canvas size to cover the entire document
        

        // Initialize the canvas content
        loadCanvasContent();

        
    })();
</script>
```


Modyfikacja Zindex zmienia pozycje warstwy ze śniegiem
Bynajmniej powwinno





Canva:
```
(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };
    window.requestAnimationFrame = requestAnimationFrame;
})();


var flakes = [],
    canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    flakeCount = 150,
    mX = -100,
    mY = -100

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

function snow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < flakeCount; i++) {
        var flake = flakes[i],
            x = mX,
            y = mY,
            minDist = 150,
            x2 = flake.x,
            y2 = flake.y;

        var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
            dx = x2 - x,
            dy = y2 - y;

        if (dist < minDist) {
            var force = minDist / (dist * dist),
                xcomp = (x - x2) / dist,
                ycomp = (y - y2) / dist,
                deltaV = force / 2;

            flake.velX -= deltaV * xcomp;
            flake.velY -= deltaV * ycomp;

        } else {
            flake.velX *= .98;
            if (flake.velY <= flake.speed) {
                flake.velY = flake.speed
            }
            flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
        }

        ctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
        flake.y += flake.velY;
        flake.x += flake.velX;
            
        if (flake.y >= canvas.height || flake.y <= 0) {
            reset(flake);
        }


        if (flake.x >= canvas.width || flake.x <= 0) {
            reset(flake);
        }

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
        ctx.fill();
    }
    requestAnimationFrame(snow);
};

function reset(flake) {
    flake.x = Math.floor(Math.random() * canvas.width);
    flake.y = 0;
    flake.size = (Math.random() * 3) + 2;
    flake.speed = (Math.random() * 1) + 0.5;
    flake.velY = flake.speed;
    flake.velX = 0;
    flake.opacity = (Math.random() * 0.5) + 0.3;
}

function init() {
    for (var i = 0; i < flakeCount; i++) {
        var x = Math.floor(Math.random() * canvas.width),
            y = Math.floor(Math.random() * canvas.height),
            size = (Math.random() * 3) + 2,
            speed = (Math.random() * 1) + 0.5,
            opacity = (Math.random() * 0.5) + 0.3;

        flakes.push({
            speed: speed,
            velY: speed,
            velX: 0,
            x: x,
            y: y,
            size: size,
            stepSize: (Math.random()) / 30,
            step: 0,
            opacity: opacity
        });
    }

    snow();
};

canvas.addEventListener("mousemove", function(e) {
    mX = e.clientX,
    mY = e.clientY
});

window.addEventListener("resize",function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

init();
```
