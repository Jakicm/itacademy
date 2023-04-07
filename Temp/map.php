<!DOCTYPE html>
<html>
<head>
    <title>Map Locations</title>
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
    <script>
        function initMap() {
            // Create a new map object
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: {lat: <?php echo $locations[0]['latitude']; ?>, lng: <?php echo $locations[0]['longitude']; ?>}
            });

            // Add markers for each location
            <?php foreach ($locations as $location): ?>
            new google.maps.Marker({
                position: {lat: <?php echo $location['latitude']; ?>, lng: <?php echo $location['longitude']; ?>},
                map: map,
                title: <?php echo json_encode($location['name']); ?>
            });
            <?php endforeach; ?>
        }
    </script>
</head>
<body onload="initMap()">
    <div id="map" style="height: 500px;"></div>
</body>
</html>
