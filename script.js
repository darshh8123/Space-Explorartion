// Function to dynamically load mission details
function loadMissionDetails(mission) {
    let modalBody = document.getElementById('modalBody');
    if (mission === 'mars') {
      modalBody.innerHTML = `
        <h5>Mars Mission</h5>
        <p>NASA’s Perseverance Rover has been exploring Mars since landing in February 2021. The rover’s main mission is to search for signs of ancient life and collect samples that might be returned to Earth on a future mission.</p>
        <img src="images/mars-mission.jpeg" class="img-fluid rounded" alt="Mars Mission">
      `;
    } else if (mission === 'moon') {
      modalBody.innerHTML = `
        <h5>Moon Landing</h5>
        <p>The Apollo program successfully landed humans on the Moon. The historic Apollo 11 mission in 1969 was the first to land humans, with Neil Armstrong and Buzz Aldrin becoming the first humans to walk on the lunar surface.</p>
        <img src="images/moon-landing.jpeg" class="img-fluid rounded" alt="Moon Landing">
      `;
    } else if (mission === 'iss') {
      modalBody.innerHTML = `
        <h5>International Space Station</h5>
        <p>The ISS is a space station, or habitable artificial satellite, that orbits Earth. The station serves as a microgravity and space environment research laboratory where scientific research is conducted in astrobiology, astronomy, meteorology, and more.</p>
        <img src="images/space-station.jpeg" class="img-fluid rounded" alt="Space Station">
      `;
    }
  }
  
  
  

  
