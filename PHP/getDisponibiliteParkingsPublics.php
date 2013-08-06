<?php

$json = file_get_contents('http://data.nantes.fr/api/getDisponibiliteParkingsPublics/1.0/39W9VSNCSASEOGV/?output=json');
echo $json;

?>