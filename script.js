function copyToClipboard(text) {
    // Create a temporary textarea element to hold the text
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
  
    // Select and copy the text
    textarea.select();
    document.execCommand("copy");
  
    // Remove the textarea from the DOM
    document.body.removeChild(textarea);
  
    // Show notification
    showNotification(`Email copied to clipboard: ${text}`);
  }
  
  function showNotification(message) {
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = message;
  
    // Add the notification to the body
    document.body.appendChild(notification);
  
    // Animate the notification in
    requestAnimationFrame(() => {
      notification.style.top = "10px";
    });
  
    // Remove the notification after 2 seconds
    setTimeout(() => {
      notification.style.top = "-50px";
      setTimeout(() => {
        notification.remove();
      }, 300); // Match transition duration
    }, 2000);
  }