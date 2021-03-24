window.onload = initialize;

var seats = [
  {
    name: "Nadie",
    seat: 1
  },
  {
    name: "Nadie",
    seat: 2
  },
  {
    name: "Nadie",
    seat: 3
  },
  {
    name: "Nadie",
    seat: 4
  },
  {
    name: "Nadie",
    seat: 5
  },
  {
    name: "Nadie",
    seat: 6
  },
  {
    name: "Nadie",
    seat: 7
  },
  {
    name: "Nadie",
    seat: 8
  },
  {
    name: "Nadie",
    seat: 9
  },
  {
    name: "Nadie",
    seat: 10
  },
  {
    name: "Nadie",
    seat: 11
  },
  {
    name: "Nadie",
    seat: 12
  },
  {
    name: "Nadie",
    seat: 13
  },
  {
    name: "Nadie",
    seat: 14
  },
  {
    name: "Nadie",
    seat: 15
  },
  {
    name: "Nadie",
    seat: 16
  }
];

function initialize() {
  var seatElements = document.getElementsByClassName("seat");
  for(var i = 0; i < seatElements.length; i++){
    showTooltipInfoSeat(seatElements[i]);
  }

  var formSeat = document.getElementById("form-seat");
  formSeat.addEventListener("submit", addSeat);
}

function addSeat(event){
  event.preventDefault();
  var formSeat = event.target;

  console.log(parseInt(formSeat.seat.value) - 1)

  seats[parseInt(formSeat.seat.value) - 1] = {
    name: formSeat.name.value,
    seat: parseInt(formSeat.seat.value)
  }

  console.log(seats)

  showTooltipInfoSeat(document.getElementById(`seat-${parseInt(formSeat.seat.value)}`));
}

function showTooltipInfoSeat(seatElement) {
  var posString = seatElement.id.substring(5);
  var pos = parseInt(posString);

  if(seats[pos - 1].name == "Nadie"){
    seatElement.style.fill = "white";
  } else {
    seatElement.style.fill = "greenyellow";
  }

  $(`#seat-${posString}`).tooltip("dispose");

  $(`#seat-${posString}`).tooltip({
    container: 'body',
    title: `<p>Seat nº${pos}</p><h3><strong>${seats[pos - 1].name}</strong> está aquí.</h3>`,
    html: true,
    placement: "bottom"
  });
}