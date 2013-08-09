/**
 * Created with JetBrains WebStorm.
 * User: mikael
 * Date: 04/08/13
 * Time: 21:12
 * To change this template use File | Settings | File Templates.
 */




function parkingControler($scope,$http) {
    $scope.nom_application = 'My parking project';
    var a = {};
    a["0"] = "Hors service";
    a["1"] = "FERME";
    a["2"] = "ABONNES UNIQUEMENT";
    a["5"] = "OUVERT";
    $scope.status = a;
    $http.get('./scripts_php/getDisponibiliteParkingsPublics.php').success(function (data) {
        $scope.parkings = data.opendata.answer.data.Groupes_Parking.Groupe_Parking;
        console.log(JSON.stringify(data.opendata.answer.data.Groupes_Parking.Groupe_Parking));
    });
}
