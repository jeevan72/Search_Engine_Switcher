# My Awesome Chrome Extension

Thank you for checking out My Awesome Chrome Extension! This document will guide you through the manual installation process.

## Manual Installation Guide

To install this extension manually, you will need to load it as an "unpacked extension" in Google Chrome. Here are the step-by-step instructions:

1.  **Clone the Repository**
    * Open your terminal or command prompt.
    * Navigate to the directory where you want to store the extension files.
    * Run the following command to clone the repository:
        ```bash
        git clone [https://github.com/jeevan72/Search_Engine_Switcher]
        ```
    * This will create a new folder with the extension's files in your current directory.

2.  **Open Chrome Extensions Page**
    * Open your Google Chrome browser.
    * In the address bar at the top, type `chrome://extensions` and press **Enter**.

3.  **Enable Developer Mode**
    * On the Extensions page, look for the **"Developer mode"** toggle switch, which is usually in the top-right corner.
    * Click the toggle to turn it **on**. You should see new options appear, including "Load unpacked."

4.  **Load the Unpacked Extension**
    * Click the **"Load unpacked"** button that appeared after you enabled Developer mode.
    * A file selection dialog will open. Navigate to the folder that was created when you cloned the repository in Step 1.
    * Select the entire extension folder (the one containing `manifest.json` and other files) and click **"Select Folder"**.

5.  **Confirm Installation**
    * The extension should now appear in your list of installed extensions.
    * Make sure the extension's toggle switch is **on** to enable it.

That's it! The extension is now installed and should be active in your browser. You can usually find its icon in the Chrome toolbar.

---

### Having Trouble?

* **`manifest.json` not found:** Make sure you are selecting the *entire folder* that was created by the `git clone` command, not just a file within it.
* **Errors on load:** If you see an error message when you try to load the extension, there might be an issue with the extension's code. Please contact the developer.
