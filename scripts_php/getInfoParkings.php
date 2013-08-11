<?php

$json = file_get_contents('http://data.nantes.fr/api/publication/24440040400129_NM_NM_00044/LISTE_SERVICES_PKGS_PUB_NM_STBL/content/?format=json');
echo $json;

?>