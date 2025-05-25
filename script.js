const seatsContainer = document.getElementById('seats');
const confirmBtn = document.getElementById('confirm');
const summary = document.getElementById('summary');

// Create 40 seats
for (let i = 1; i <= 40; i++) {
  const seat = document.createElement('div');
  seat.classList.add('seat');
  seat.textContent = i;
  seat.addEventListener('click', () => {
    if (!seat.classList.contains('booked')) {
      seat.classList.toggle('selected');
    }
  });
  seatsContainer.appendChild(seat);
}

// Confirm button
confirmBtn.addEventListener('click', () => {
  const movie = document.getElementById('movie').value;
  const time = document.getElementById('showtime').value;
  const selectedSeats = document.querySelectorAll('.seat.selected');

  if (selectedSeats.length === 0) {
    alert("Please select at least one seat.");
    return;
  }

  const seatNumbers = Array.from(selectedSeats).map(seat => seat.textContent);

  // Lock the seats
  selectedSeats.forEach(seat => {
    seat.classList.remove('selected');
    seat.classList.add('booked');
  });

  summary.innerHTML = `
    ✅ You booked <strong>${seatNumbers.length}</strong> seat(s) for 
    <strong>${movie}</strong> at <strong>${time}</strong>.<br>
    Seats: ${seatNumbers.join(', ')}
  `;
});
