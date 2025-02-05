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
      'BCM Toolkit': '#E7F0F8',
      'FreeTherapy Casestudy': '#F0F2F7',
      'LocalCafe website Casestudy': '#F9F7F4',
      'LocalCafe Casestudy': '#F9F7F4'
  };

  // Get the color for the current title or default to a fallback color
  const newColor = colorMap[pageTitle] || ' #F3F1F8';

  // Apply the new color to the navbar
  navbar.style.backgroundColor = newColor;
}

// Call the function when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', changeNavbarColorByTitle);




// Function to change the navbar link colors based on the page title
function changeColorsByTitle() {
  // Get the current page title
  const pageTitle = document.title;

  // Select all navbar links
  const navLinks = document.querySelectorAll('.navbar a');

  // Define colors for different page titles
  const colorMap = {
      'CapitalWorx': { text: '#FC5306', hover: '#F8DACD' },
      'BCM Toolkit': { text: '#0662B0', hover: '#CDE0EF' },
      'FreeTherapy Casestudy': { text: '#687DAC', hover: '#E1E5EE' },
      'LocalCafe website Casestudy': { text: '#C2A790', hover: '#F3EDE9' },
      'LocalCafe Casestudy': { text: '#C2A790', hover: '#F3EDE9' }
  };

  // Get the color scheme for the current title or default to a fallback color
  const colors = colorMap[pageTitle] || { text: '#8472B9', hover: '#E6E3F1' };

  // Apply the new text and hover colors to the navbar links
  navLinks.forEach(link => {
      link.style.color = colors.text;
      link.addEventListener('mouseover', () => {
          link.style.backgroundColor = colors.hover;
      });
      link.addEventListener('mouseout', () => {
          link.style.backgroundColor = 'transparent';
      });
  });
}

// Call the function when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', changeColorsByTitle);





// Function to change the body background color based on the page title
function changeBodyColorByTitle() {
  
  const pageTitle = document.title;

  const body = document.body;

  if (!body) {
      console.error('Body element not found!');
      return;
  }

  const colorMap = {
      'CapitalWorx': '#FCEDE6',
      'BCM Toolkit': '#E7F0F8',
      'FreeTherapy Casestudy': '#F0F2F7',
      'LocalCafe website Casestudy': '#F9F7F4',
      'LocalCafe Casestudy': '#F9F7F4',
      'My site': '#eae8ef'
  };
  
  const newColor = colorMap[pageTitle] || '#F3F1F8';
  
  body.style.backgroundColor = newColor;
}

document.addEventListener('DOMContentLoaded', changeBodyColorByTitle);


// Function to change the footer color based on the page title
function changeFooterColorByTitle() {
  
  const pageTitle = document.title;

  const footer = document.querySelector('footer');

  if (!footer) {
      console.error('Footer element not found! Make sure the selector is correct.');
      return;
  }

  const colorMap = {
      'CapitalWorx': '#F8DACD',
      'BCM Toolkit': '#CDE0EF',
      'FreeTherapy Casestudy': '#E1E5EE',
      'LocalCafe website Casestudy': '#F3EDE9',
      'LocalCafe Casestudy': '#F3EDE9'
  };

  const newColor = colorMap[pageTitle] || ' #F3F1F8';

  footer.style.backgroundColor = newColor;
}

document.addEventListener('DOMContentLoaded', changeFooterColorByTitle);