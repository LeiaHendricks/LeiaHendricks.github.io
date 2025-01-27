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

// Function to change the navbar color based on the page title
function changeNavbarColorByTitle() {
  // Get the current page title
  const pageTitle = document.title;

  // Select the navigation bar element (use the appropriate selector for your navbar)
  const navbar = document.querySelector('.navbar');

  if (!navbar) {
      console.error('Navbar element not found! Make sure the selector is correct.');
      return;
  }

  // Define colors for different page titles
  const colorMap = {
      'CapitalWorx': '#FCEDE6',
      'BCM Toolkit': '#F0F2F7',
      'FreeTherapy Casestudy': '#E1E5EE',
      'LocalCafe website Casestudy': '#F3EDE9',
      'LocalCafe Casestudy': '#F3EDE9'
  };

  // Get the color for the current title or default to a fallback color
  const newColor = colorMap[pageTitle] || ' #F3F1F8';

  // Apply the new color to the navbar
  navbar.style.backgroundColor = newColor;
}

// Call the function when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', changeNavbarColorByTitle);

