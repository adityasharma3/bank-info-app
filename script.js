//retrieving data entered by user.
var input_ifsc = document.getElementById('ifsc_code');

//creating show_details variable to change display type of output from 'none' to 'block'
var show_details = document.getElementById('output-section');

//making variables for inputing json data later on...
var ifsc = document.getElementById('ifsc');
var micr = document.getElementById('micr');
var branch = document.getElementById('branch');
var address = document.getElementById('address');
var contact = document.getElementById('contact');
var upi = document.getElementById('upi');
var rtgs = document.getElementById('rtgs');
var neft = document.getElementById('neft');
var imps = document.getElementById('imps');
var city = document.getElementById('city');
var district = document.getElementById('district');
var swift = document.getElementById('swift');
var bank_name = document.getElementById('bank-name');

var output = document.getElementById('output');

//main function to display and retrieve data from json
async function getData() {

    var input = document.getElementById('ifsc_code').value;
    
    if (input == "") {
      alert("please input IFSC");
      return;
    }

    let datapoint = `https://ifsc.razorpay.com/${input}`;
    
    const response = await fetch(datapoint);
    const data = await response.json();

    if (data !== 'Not Found') {
        var display = data;

        bank_name.innerText = display.BANK;
        ifsc.innerText = display.IFSC;
        micr.innerText = display.MICR;
        branch.innerText = display.BRANCH;
        address.innerText = display.ADDRESS;
        contact.innerText = display.CONTACT;
        upi.innerText = display.UPI;
        rtgs.innerText = display.RTGS;
        neft.innerText = display.NEFT;
        imps.innerText = display.IMPS;
        city.innerText = display.CITY;
        district.innerText = display.DISTRICT;
        swift.innerText = display.SWIFT;

        show_details.style.display = "block";
    } 
    else {
        alert('No such IFSC code available, please enter valid IFSC code');
    }
}

document.getElementById('submit').addEventListener('click' , getData);