//angle 360 deg
//12 hr= 360 deg 
//1hr= 360/12 =30 deg (unitary method)
//[h hrs = 30h + m/2]--hrs
//1 hr =60 min 
//60 min =30
//1 min=30/60=1/2 
//m mins=(1/2)m   
//    1min =360/60=6 deg  [m min = 6min]--min 
// 60sec = 360 /60 =6 deg  [ssec =6 sec]--sec

let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();

        //hrs,min,sec
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}//clock roataio code

setInterval(displayTime, 1000);

function calculate() {
  try {
    const result = eval(input.value);
    input.value = result;
  } catch (error) {
    input.value = "Error";
  }
}

// Function to clear the input field
function clearInput() {
  input.value = "";
}
