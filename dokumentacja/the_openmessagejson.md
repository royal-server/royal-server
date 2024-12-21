# Notification Script Manual

This script dynamically fetches and displays notifications from a JSON endpoint. Notifications are displayed based on their type, timing, and other configuration parameters.

---

## JSON Structure
The notification data should follow this format:

### Fields
- `id` (string): A unique identifier for the notification. Required for dismiss and auto-dismiss functionality.
- `type` (string): The type of notification. Supported values:
  - `normal`: A standard notification that can be dismissed manually.
  - `cookie`: Displays a cookie banner at the bottom of the screen with an "OK" button to dismiss.
  - `perm`: A persistent notification that cannot be dismissed.
  - `auto:X`: Automatically dismisses the notification after `X` seconds.
- `start-show-unix` (integer): The Unix timestamp for when the notification should start showing.
- `end-show-unix` (integer): The Unix timestamp for when the notification should stop showing.
- `colors` (array of strings): An array with two values:
  1. Background color (e.g., `"#2196F3"`).
  2. Text color (e.g., `"#FFFFFF"`).
- `html-msg` (string): The HTML message content for the notification. Supports inline HTML.

---

## Example JSON
```json
{
  "data": [
    {
      "id": "1",
      "type": "normal",
      "start-show-unix": "1700000000",
      "end-show-unix": "1700003600",
      "colors": ["#2196F3", "#FFFFFF"],
      "html-msg": "This is a <b>normal</b> notification."
    },
    {
      "id": "2",
      "type": "cookie",
      "cb": "OK", \\dismiss button text
      "start-show-unix": "1700000000",
      "end-show-unix": "1700003600",
      "colors": ["#4CAF50", "#FFFFFF"],
      "html-msg": "We use cookies to improve your experience. Click OK to dismiss."
    },
    {
      "id": "3",
      "type": "perm",
      "start-show-unix": "1700000000",
      "end-show-unix": "1700007200",
      "colors": ["#F44336", "#FFFFFF"],
      "html-msg": "<b>Important:</b> This notification cannot be dismissed."
    },
    {
      "id": "4",
      "type": "auto:5",
      "start-show-unix": "1700000000",
      "end-show-unix": "1700003600",
      "colors": ["#FFC107", "#000000"],
      "html-msg": "This notification will auto-dismiss in 5 seconds."
    }
  ]
}
