---

# Notification System Manual

This document explains how to create and format the JSON file used in the notification system. It will describe each field in the JSON and its functionality.

## JSON Structure

The JSON file used by this system is expected to follow a specific structure, containing a `data` array where each object represents a notification. Below is an example of a properly structured JSON file:

```json
{
  "data": [
    {
      "id": "1",
      "type": "cookie",
      "start-show-unix": 1700000000,
      "end-show-unix": 1702588800,
      "colors": ["#FFEB3B", "#000000"],
      "html-msg": "<p>This is a cookie consent message.</p>",
      "cb": "OK"
    },
    {
      "id": "2",
      "type": "normal",
      "start-show-unix": 1699500000,
      "end-show-unix": 1702588800,
      "colors": ["#2196F3", "#ffffff"],
      "html-msg": "<p>Welcome to our site! Here is a regular notification.</p>"
    }
  ]
}
```

### 1. `id` (Required)
- **Type**: String
- **Description**: A unique identifier for the notification. This ID is used to track whether the notification has been dismissed or not.
  
### 2. `type` (Required)
- **Type**: String
- **Possible Values**:
  - `cookie`: A special type of notification for cookie consent.
  - `normal`: A standard notification.
- **Description**: Specifies the type of notification. Cookie notifications have unique behavior and appear at the bottom of the page, while normal notifications appear at the top.

### 3. `start-show-unix` (Required)
- **Type**: Integer (UNIX Timestamp)
- **Description**: The UNIX timestamp (in seconds) that indicates when the notification should begin showing. Notifications before this time will not be displayed.

### 4. `end-show-unix` (Required)
- **Type**: Integer (UNIX Timestamp)
- **Description**: The UNIX timestamp (in seconds) that indicates when the notification should stop showing. Notifications after this time will not be displayed.

### 5. `colors` (Required)
- **Type**: Array of 2 Strings
- **Description**: An array containing two color values:
  - `colors[0]`: The background color of the notification.
  - `colors[1]`: The text color of the notification.
  
### 6. `html-msg` (Required)
- **Type**: String
- **Description**: The HTML message that will be displayed in the notification. This can include HTML tags such as `<p>`, `<a>`, etc.

### 7. `cb` (Optional, for cookie notifications only)
- **Type**: String
- **Description**: The text for the button or action to dismiss the cookie notification. If not provided, the default action text "OK" will be used.

---

## Explanation of the Behavior

### Cookie Notifications
- Cookie notifications are handled differently from normal notifications.
  - They will **always appear at the bottom** of the screen.
  - They will be **fixed** to the bottom and will not disappear until the user clicks the dismiss button.
  - Cookie notifications have a `cb` field, which defines the label for the dismiss button (e.g., "OK").
  - If there is a cookie notification that is active (within the specified `start-show-unix` and `end-show-unix` time range), **no other notifications will be shown** until the user interacts with the cookie notification.

### Normal Notifications
- Normal notifications are displayed at the **top of the page** and can be stacked vertically.
  - Each notification will have a **dismiss button (×)** that allows users to dismiss the notification.
  - If a notification is dismissed, its `id` is saved to `localStorage` to prevent it from being shown again in future sessions.

### Time Range Validity
- Both cookie and normal notifications are only shown if the current UNIX timestamp falls within the `start-show-unix` and `end-show-unix` time range.
- If the current time is outside this range, the notification will be skipped.

---

## How to Create a Notification JSON File

1. **Create a JSON file** with the structure as shown in the example above.
2. **Add notifications to the `data` array**:
   - For each notification, specify its `id`, `type`, `start-show-unix`, `end-show-unix`, `colors`, and `html-msg`.
   - If it's a cookie notification, add the `cb` field for the button text.
3. **Host the JSON file** on a server or use a direct file path (e.g., a GitHub repository or a web server).

### Example JSON

```json
{
  "data": [
    {
      "id": "cookie1",
      "type": "cookie",
      "start-show-unix": 1700000000,
      "end-show-unix": 1702588800,
      "colors": ["#FFEB3B", "#000000"],
      "html-msg": "<p>This site uses cookies to enhance your experience.</p>",
      "cb": "Accept"
    },
    {
      "id": "notify1",
      "type": "normal",
      "start-show-unix": 1699500000,
      "end-show-unix": 1702588800,
      "colors": ["#4CAF50", "#FFFFFF"],
      "html-msg": "<p>Welcome to our site! Stay tuned for updates.</p>"
    }
  ]
}
```

---

## How the System Works

1. **Loading the JSON**: The script fetches the JSON from a specified URL (`NOTIFICATION_URL`).
2. **Parsing and Validation**: The JSON data is parsed and validated to ensure all required fields are present.
3. **Filtering Notifications**: Notifications are filtered based on their type (`cookie` or `normal`) and time range (`start-show-unix` and `end-show-unix`).
4. **Displaying Notifications**:
   - **Cookie Notifications** are displayed at the bottom of the page with a dismiss button.
   - **Normal Notifications** are displayed at the top of the page and can be dismissed individually.
5. **Dismissal Logic**: Notifications can be dismissed, and their `id` will be stored in `localStorage` to prevent them from being shown again.

---

## Additional Notes

- **Base64 Decoding**: If any notifications contain base64 encoded messages, you can use the `decodeBase64` function to decode them.
- **Manual Fix for Malformed JSON**: The `attemptFixJSON` function is used to attempt to correct any minor JSON formatting issues (like missing quotes or commas) before parsing the data.

---

