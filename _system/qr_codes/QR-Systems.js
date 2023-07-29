// Initialize the QR code generator
var qr = new QRCode("qrcode-container", {
});

// Function to generate and show QR code
function showQRCode(text) {
  // Generate the QR code
  qr.makeCode(text);

  // Show the QR code container
  var container = document.getElementById("qrcode-container");
  container.style.display = "block";
}

// Function to hide QR code
function hideQRCode() {
  // Hide the QR code container
  var container = document.getElementById("qrcode-container");
  container.style.display = "none";
}

// Add event listeners to the buttons
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

btn1.addEventListener("click", function() {
  showQRCode('["When did Black Hill Primary School first open?", ["1878", "1978", "1900", "1887"]]');
});

btn2.addEventListener("click", function() {
  showQRCode('["Who currently has the highest score on this Chess Board?", ["White", "Black", "Garry", "George"]]');
});

btn3.addEventListener("click", function() {
  showQRCode('["How many other courts are colliding with this basketball court?", ["3", "2", "1", "4"]]');
});

btn4.addEventListener("click", function() {
  showQRCode('["What colour is the shade sail above you?", ["Blue/ White", "Cyan/ light Gray", "Pink/ Purple", "Im Colour-blind"]]');
});

// Add event listener to hide QR code on click
var container = document.getElementById("qrcode-container");
container.addEventListener("click", hideQRCode);



function scanQR() {
  // Initialize the scanner
  var scanner = new Html5Qrcode("reader");

  // Start scanning
  scanner.start(
    { facingMode: "environment" },
    function (decodedText) {
      // Display the scanned QR code's contents on the webpage
      alert(decodedText);
    },
    function (error) {
      // Handle errors

      sessionStorage.setItem("questionArray", error);
      window.location.href = "difficultySelection.html";
      // tbd
    }
  );
}

function updateForum() {
  var stringQuestionArray = sessionStorage.getItem("questionArray");
  questionArray = JSON.parse(stringQuestionArray);

  const question = questionArray[0];
  const options = questionArray[1];
  const prompt = document.querySelector("#prompt");
  prompt.textContent = question;

  const form = document.querySelector("#answer-form");
  // Remove existing radio buttons and labels
  while (form.firstChild) {
    form.removeChild(form.firstChild);
  }

  options.forEach((option) => {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = option;
    if (option === "Option1") {
      radio.checked = true;
    }
    const label = document.createElement("label");
    label.for = option;
    label.textContent = option;
    form.appendChild(radio);
    form.appendChild(label);
    form.appendChild(document.createElement("br"));
  });
}