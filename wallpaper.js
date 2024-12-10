const categories = ["neko", "waifu", "megumin", "shinobu"]; // Categories to choose from fun
const webhookUrl = "https://discord.com/api/webhooks/1315063023613775982/lAg4xa14l78fFemXvNpW3GYCl3mg7qGPa_qt7-H-VD5pusMUYfbN1xojwJumYCeaePju?wait=1"; // Your Discord webhook URL
const threadId = "1315967807975850004"; // Thread ID to send the webhook message to
const echoUrl1 = "https://echo.apyhub.com/Dont%20Delete%20IT%20My%20Weebhook"; // First additional URL
const echoUrl2 = "https://echo.apyhub.com/Beacuase%20This%20Is%20%Funny%20Easter%20Egg"; // Second additional URL

// Function to get a random category from the list
function getRandomCategory() {
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
}

// Function to send the image to Discord
async function sendToDiscord() {
    try {
        // Select a random category (neko, waifu, megumin, or shinobu)
        const category = getRandomCategory();
        const nekoUrl = `https://api.waifu.pics/sfw/${category}`;  // API URL based on selected category

        // Fetch the image data from the selected category's API
        const response = await fetch(nekoUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch image.");
        }

        const data = await response.json();
        const imageUrl = data.url;

        // Save the image URL to localStorage
        saveImageToLocalStorage(imageUrl);

        // Update the webpage's background image
        setBackgroundImage(imageUrl);

        // Construct the payload to send to Discord as an embed
        const payload = {
            content: `Here is a random ${category} image for you!`,  // Optional message
            embeds: [
                {
                    title: `${category.charAt(0).toUpperCase() + category.slice(1)} Image`,
                    image: {
                        url: imageUrl  // Set the image URL from the API
                    }
                }
            ]
        };

        // Send the POST request to Discord webhook with the thread ID
        const discordResponse = await fetch(`${webhookUrl}&thread_id=${threadId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)  // Send the payload as JSON
        });

        if (!discordResponse.ok) {
            throw new Error("Failed to send message to Discord.");
        }

        // Send additional requests to the other two URLs
        await sendAdditionalRequests();

    } catch (error) {
        console.error("Error:", error);
    }
}

// Function to send additional requests to echo URLs
async function sendAdditionalRequests() {
    try {
        // Send the first additional request
        const echoResponse1 = await fetch(echoUrl1);
        if (!echoResponse1.ok) {
            throw new Error("Failed to send request to the first echo URL.");
        }

        // Send the second additional request
        const echoResponse2 = await fetch(echoUrl2);
        if (!echoResponse2.ok) {
            throw new Error("Failed to send request to the second echo URL.");
        }

    } catch (error) {
        console.error("Error in additional requests:", error);
    }
}

// Function to save the last 10 image URLs in localStorage
function saveImageToLocalStorage(imageUrl) {
    let images = JSON.parse(localStorage.getItem("lastImages")) || []; // Get the existing images or initialize an empty array

    images.push(imageUrl);  // Add the new image URL to the array
    if (images.length > 10) {
        images.shift();  // Remove the oldest image if the array exceeds 10
    }

    localStorage.setItem("lastImages", JSON.stringify(images)); // Save the updated array back to localStorage

    // Log the last 10 images to the console
    console.log("Last 10 images:", images);
}

// Function to set the background image of the webpage
function setBackgroundImage(imageUrl) {
    // Set the top-aligned image for the main background
    document.body.style.backgroundImage = `url(${imageUrl})`;
    
    // Apply the zoom effect by scaling down the image for PC
    document.body.style.transform = "scale(1.1)";  // Zoom out the image
    document.body.style.backgroundSize = "cover"; // Ensure the image covers the whole screen
    document.body.style.backgroundPosition = "top center";  // Keep the image aligned to the top
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";

    // Create and set the blurred background using the pseudo-element ::before
    const beforeElement = document.querySelector('body::before');
    if (beforeElement) {
        beforeElement.style.backgroundImage = `url(${imageUrl})`;
    }
}

// Call the function to send data to Discord and additional requests
sendToDiscord();

// Set an interval to repeat the process every 10 seconds
setInterval(async () => {
    await sendToDiscord();  // Send a request every 10 seconds
}, 10000); // 10 seconds

// CSS for background image and blur effect
document.head.insertAdjacentHTML("beforeend", `
<style>
  body {
    margin: 0;
    overflow: hidden;
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;
    transition: transform 1s ease; /* Smooth zoom out transition */
  }

  body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: top center;
    filter: blur(10px);  /* Apply blur effect */
    z-index: -1;  /* Position the blur behind content */
  }

  @media (max-width: 768px) {
    body::before {
      filter: blur(5px);  /* Lighter blur for mobile */
    }
  }
</style>
`);
