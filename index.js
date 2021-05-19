function loadMap(){
	 const tenkasi = { lat: 8.9594, lng: 77.3161 };
  // The map, centered at Uluru
  	const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center: tenkasi,
    }
  );
}