function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }



  // for upcoming mobile data 
const mobiles = [
    {
        name: "Samsung Galaxy XYZ",
        price: "$599",
        image: "img/mobilesList/galaxy s23.png",
        specScore: "80%"
    },
    {
        name: "Vivo V23 Pro",
        price: "$599",
        image: "img/mobilesList/vivo v23 pro.png",
        specScore: "90%"
    },
    {
        name: "Vivo V24",
        price: "$599",
        image: "img/mobilesList/vivo v24.webp",
        specScore: "85%"
    },
    {
        name: "Vivo V23 Pro",
        price: "$599",
        image: "img/mobilesList/vivo v23 pro.png",
        specScore: "90%"
    },
    {
        name: "Vivo V24",
        price: "$599",
        image: "img/mobilesList/vivo v24.webp",
        specScore: "85%"
    },
    {
        name: "Vivo V23 Pro",
        price: "$599",
        image: "img/mobilesList/vivo v23 pro.png",
        specScore: "90%"
    }
    // Add more mobile objects as needed
];

// for letest mobiles data object
const Letestmobiles = [
    {
        name: "Samsung Galaxy XYZ",
        price: "$599",
        image: "img/mobilesList/galaxy s23.png",
        specScore: "80%"
    },
    {
        name: "Vivo V23 Pro",
        price: "$599",
        image: "img/mobilesList/vivo v23 pro.png",
        specScore: "90%"
    },
    {
        name: "Vivo V24",
        price: "$599",
        image: "img/mobilesList/vivo v24.webp",
        specScore: "85%"
    },
    {
        name: "Vivo V23 Pro",
        price: "$599",
        image: "img/mobilesList/vivo v23 pro.png",
        specScore: "90%"
    },
    {
        name: "Vivo V24",
        price: "$599",
        image: "img/mobilesList/vivo v24.webp",
        specScore: "85%"
    },
    {
        name: "Vivo V23 Pro",
        price: "$599",
        image: "img/mobilesList/vivo v23 pro.png",
        specScore: "90%"
    }
    // Add more mobile objects as needed
];



// Function to generate HTML for each mobile
function generateMobileHTML(mobile) {
    return `
    <div class="brand-showcase2">
    <div class="brand1">
        <div class="brand-info">
            <span class="spec-score">SPEC SCORE: ${mobile.specScore}</span>
        </div>
        <img src="${mobile.image}">
        <div class="mobile-details">
            <p class="mobile-name">${mobile.name}</p>
            <p class="mobile-price">${mobile.price}</p>
        </div>
    </div>
    </div>
    `;
}

// for upcoming mobiles
function renderMobiles() {
    const brandShowcaseContainer = document.getElementById("brandShowcaseContainer");
    let mobilesHTML = "";
    mobiles.forEach(mobile => {
        mobilesHTML += generateMobileHTML(mobile);
    });
    brandShowcaseContainer.innerHTML = mobilesHTML;
}
// for letest Mobiles
function LetstMobileRender() {
    const brandShowcaseContainer = document.getElementById("brandShowcaseContainer2");
    let mobilesHTML = "";
    Letestmobiles.forEach(mobile => {
        mobilesHTML += generateMobileHTML(mobile);
    });
    brandShowcaseContainer.innerHTML = mobilesHTML;
}
    // Render mobiles when the page loads
    document.addEventListener("DOMContentLoaded", renderMobiles);
    document.addEventListener("DOMContentLoaded", LetstMobileRender);



// for compare mobiles
function compareMobiles() {
    // Get the values entered by the user
    var mobile1 = document.getElementById("mobile1").value.trim();
    var mobile2 = document.getElementById("mobile2").value.trim();

    // Fetch the mobile data from JSON file
    fetch('mobiles.json')
        .then(response => response.json())
        .then(data => {
            // Find the mobile objects based on the names entered by the user
            var selectedMobiles = data.filter(mobile => mobile.name.toLowerCase() === mobile1.toLowerCase() || mobile.name.toLowerCase() === mobile2.toLowerCase());

            // Check if both mobiles are found
            if (selectedMobiles.length === 2) {
                // Build the comparison result
                var comparisonHTML = "<h3>Comparison:</h3>";
                comparisonHTML += "<ul>";
                comparisonHTML += "<li><strong>" + selectedMobiles[0].name + "</strong> vs <strong>" + selectedMobiles[1].name + "</strong></li>";
                comparisonHTML += "<li>Brand: " + selectedMobiles[0].brand + " vs " + selectedMobiles[1].brand + "</li>";
                comparisonHTML += "<li>Ram: " + selectedMobiles[0].ram + " vs " + selectedMobiles[1].ram + "</li>";
                comparisonHTML += "<li>Storage: " + selectedMobiles[0].storage + " vs " + selectedMobiles[1].storage + "</li>";
                comparisonHTML += "</ul>";

                // Display the comparison result
                document.getElementById("comparisonResult").innerHTML = comparisonHTML;
            } else {
                // If one or both mobiles are not found, display an error message
                document.getElementById("comparisonResult").innerHTML = "<p>One or both mobiles not found. Please check the names and try again.</p>";
            }
        })
        .catch(error => console.error('Error fetching mobile data:', error));
}



    // Dummy data representing a mobile phone
    document.addEventListener("DOMContentLoaded", function() {
        // Array of mobile phone data
        var mobilePhones = [
            {
                name: "Infinix Note 40 Pro",
                status: "Upcoming",
                launchDate: "28 Jun, 2024",
                imageSrc: "img/mobilesList/galaxy s23.png", // Placeholder image URL
                photoCount: 47,
                processor: "MediaTeck Helio G99 Ultimate",
                ram: "8GB RAM",
                rearCamera: "108 MP + 2 MP + 2 MP Rear Camera",
                frontCamera: "32 MP Front Camera",
                battery: "5000 mAh | 70W Fast Charging",
                display: "6.78 inches (17.22cm)",
                price: "$21,490"
            },
            {
                name: "Samsung Galaxy S30",
                status: "Upcoming",
                launchDate: "15 Jul, 2024",
                imageSrc: "img/mobilesList/vivo v23 pro.png", // Placeholder image URL
                photoCount: 52,
                processor: "Exynos 2200",
                ram: "12GB RAM",
                rearCamera: "108 MP + 12 MP + 8 MP Rear Camera",
                frontCamera: "40 MP Front Camera",
                battery: "4800 mAh | 65W Fast Charging",
                display: "6.6 inches (16.76cm)",
                price: "$1,199"
            },
            {
                name: "Samsung Galaxy 445",
                status: "Upcoming",
                launchDate: "15 Jul, 2024",
                imageSrc: "img/mobilesList/vivo v23 pro.png", // Placeholder image URL
                photoCount: 52,
                processor: "Exynos 2200",
                ram: "12GB RAM",
                rearCamera: "108 MP + 12 MP + 8 MP Rear Camera",
                frontCamera: "40 MP Front Camera",
                battery: "4800 mAh | 65W Fast Charging",
                display: "6.6 inches (16.76cm)",
                price: "$1,199"
            }
            // Add more mobile phones as needed
        ];

  
        function generateMobilePhoneHTML(phone) {
            return `
            <div class="mobilecontainer">
            <div class="MobileList mt-5">
            <div id="mobileTop">
                <p>${phone.name}</p>
                <p><a class="text-danger" href="#">+Compare</a></p>
            </div>
            <div style="display: inline">
                <span style="background-color: rgb(42, 149, 149); border-radius: 5px; padding: 5px;color:white;">${phone.status}</span><span>Expected Launch: ${phone.launchDate}</span>
            </div>
            </div>
            <div style="box-shadow: 0 0 6px black;">
            <div class="d-flex row">
                <div class="col-md-6 d-block text-center" id="PhoneImgMobileList">
                    <img src="${phone.imageSrc}" class="img-fluid"/>
                    <p><a class="text-decoration-none" href="#">view Photos (${phone.photoCount})</a></p>
                </div>
                <div  style="margin: auto 0" class="col-md-6 d-flex justify-content-between align-items-center flex-column">
                    <ul id="PhoneFeatures" >
                        <li><span><img src="img/icons/processor.png"></span><span>${phone.processor}</span> </li>
                        <li><span><img src="img/icons/ram.png"></span><span>${phone.ram}</span></li>
                        <li><span><img src="img/icons/camera.png"></span><span>${phone.rearCamera}</span> </li>
                        <li><span><img src="img/icons/camera.png"></span><span>${phone.frontCamera}</span></li>
                        <li><span><img src="img/icons/battery.png"></span><span>${phone.battery}</span></li>
                        <li><span><img src="img/icons/wifi-connection.png"></span><span>${phone.display}</span> </li>
                    </ul>
                    <p><a class="text-decoration-none" href="#">View All Specs</a></p>
                </div>
            </div>
            <div class="d-flex justify-content-between p-2" style="background-color: rgb(220, 215, 204);">
                <p>Expected Price</p>
                <p>${phone.price}</p>
            </div>
            </div>
            </div>
            `;
        }

        var dynamicMobileList = document.getElementById("dynamicMobileList");
        // Generate HTML for each mobile phone and append it to the container
        mobilePhones.forEach(function(phone) {
            var mobilePhoneHTML = generateMobilePhoneHTML(phone);
            dynamicMobileList.innerHTML += mobilePhoneHTML;
        });
        countPhonesFounded.innerText = mobilePhones.length + " Phones Found";
    });
