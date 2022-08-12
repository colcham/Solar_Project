var wms_layers = [];


        var lyr_OSMBasemap_0 = new ol.layer.Tile({
            'title': 'OSM Basemap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SolarEnergyGenerationPotentialKilowattHours_1 = new ol.format.GeoJSON();
var features_SolarEnergyGenerationPotentialKilowattHours_1 = format_SolarEnergyGenerationPotentialKilowattHours_1.readFeatures(json_SolarEnergyGenerationPotentialKilowattHours_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SolarEnergyGenerationPotentialKilowattHours_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolarEnergyGenerationPotentialKilowattHours_1.addFeatures(features_SolarEnergyGenerationPotentialKilowattHours_1);
var lyr_SolarEnergyGenerationPotentialKilowattHours_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SolarEnergyGenerationPotentialKilowattHours_1, 
                style: style_SolarEnergyGenerationPotentialKilowattHours_1,
                interactive: true,
    title: 'Solar Energy Generation Potential (Kilowatt-Hours)<br />\
    <img src="styles/legend/SolarEnergyGenerationPotentialKilowattHours_1_0.png" /> 64,178 - 6,627,810<br />\
    <img src="styles/legend/SolarEnergyGenerationPotentialKilowattHours_1_1.png" /> 6,627,810 - 13,800,000<br />\
    <img src="styles/legend/SolarEnergyGenerationPotentialKilowattHours_1_2.png" /> 13,800,000 - 18,800,000<br />\
    <img src="styles/legend/SolarEnergyGenerationPotentialKilowattHours_1_3.png" /> 18,800,000 - 23,200,000<br />\
    <img src="styles/legend/SolarEnergyGenerationPotentialKilowattHours_1_4.png" /> 23,200,000 - 29,600,000<br />\
    <img src="styles/legend/SolarEnergyGenerationPotentialKilowattHours_1_5.png" /> 29,600,000 - 36,100,000<br />\
    <img src="styles/legend/SolarEnergyGenerationPotentialKilowattHours_1_6.png" /> 36,100,000 - 44,800,000<br />\
    <img src="styles/legend/SolarEnergyGenerationPotentialKilowattHours_1_7.png" /> 44,800,000 - 62,300,000<br />\
    <img src="styles/legend/SolarEnergyGenerationPotentialKilowattHours_1_8.png" /> 62,300,000 - 108,000,000<br />\
    <img src="styles/legend/SolarEnergyGenerationPotentialKilowattHours_1_9.png" /> 108,000,000 - 264,000,000<br />'
        });
var format_PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2 = new ol.format.GeoJSON();
var features_PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2 = format_PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2.readFeatures(json_PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2.addFeatures(features_PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2);
var lyr_PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2, 
                style: style_PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2,
                interactive: true,
    title: 'Potential Carbon Abatement With Full Solar Capacity (Metric Tons) <br />\
    <img src="styles/legend/PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2_0.png" /> 0 - 1807<br />\
    <img src="styles/legend/PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2_1.png" /> 1807 - 3758<br />\
    <img src="styles/legend/PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2_2.png" /> 3758 - 5124<br />\
    <img src="styles/legend/PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2_3.png" /> 5124 - 6316<br />\
    <img src="styles/legend/PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2_4.png" /> 6316 - 8069<br />\
    <img src="styles/legend/PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2_5.png" /> 8069 - 9835<br />\
    <img src="styles/legend/PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2_6.png" /> 9835 - 12218<br />\
    <img src="styles/legend/PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2_7.png" /> 12218 - 16986<br />\
    <img src="styles/legend/PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2_8.png" /> 16986 - 29322<br />\
    <img src="styles/legend/PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2_9.png" /> 29322 - 71843<br />'
        });
var format_PercentofBuildingsSuitableforSolar_3 = new ol.format.GeoJSON();
var features_PercentofBuildingsSuitableforSolar_3 = format_PercentofBuildingsSuitableforSolar_3.readFeatures(json_PercentofBuildingsSuitableforSolar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PercentofBuildingsSuitableforSolar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PercentofBuildingsSuitableforSolar_3.addFeatures(features_PercentofBuildingsSuitableforSolar_3);
var lyr_PercentofBuildingsSuitableforSolar_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PercentofBuildingsSuitableforSolar_3, 
                style: style_PercentofBuildingsSuitableforSolar_3,
                interactive: true,
    title: 'Percent of Buildings Suitable for Solar<br />\
    <img src="styles/legend/PercentofBuildingsSuitableforSolar_3_0.png" /> 0 %<br />\
    <img src="styles/legend/PercentofBuildingsSuitableforSolar_3_1.png" /> 0 - 50%<br />\
    <img src="styles/legend/PercentofBuildingsSuitableforSolar_3_2.png" /> 50 - 71.4%<br />\
    <img src="styles/legend/PercentofBuildingsSuitableforSolar_3_3.png" /> 71.4 - 79.4%<br />\
    <img src="styles/legend/PercentofBuildingsSuitableforSolar_3_4.png" /> 79.4 - 84%<br />\
    <img src="styles/legend/PercentofBuildingsSuitableforSolar_3_5.png" /> 84 - 88.3%<br />\
    <img src="styles/legend/PercentofBuildingsSuitableforSolar_3_6.png" /> 88.3 - 91.9%<br />\
    <img src="styles/legend/PercentofBuildingsSuitableforSolar_3_7.png" /> 91.9 - 94.3%<br />\
    <img src="styles/legend/PercentofBuildingsSuitableforSolar_3_8.png" /> 94.3 - 96.9%<br />\
    <img src="styles/legend/PercentofBuildingsSuitableforSolar_3_9.png" /> 96.9 - 99.9%<br />'
        });
var format_SanMateoCountyCityBoundaries_4 = new ol.format.GeoJSON();
var features_SanMateoCountyCityBoundaries_4 = format_SanMateoCountyCityBoundaries_4.readFeatures(json_SanMateoCountyCityBoundaries_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SanMateoCountyCityBoundaries_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanMateoCountyCityBoundaries_4.addFeatures(features_SanMateoCountyCityBoundaries_4);
var lyr_SanMateoCountyCityBoundaries_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SanMateoCountyCityBoundaries_4, 
                style: style_SanMateoCountyCityBoundaries_4,
                interactive: true,
                title: '<img src="styles/legend/SanMateoCountyCityBoundaries_4.png" /> San Mateo County City Boundaries'
            });

lyr_OSMBasemap_0.setVisible(true);lyr_SolarEnergyGenerationPotentialKilowattHours_1.setVisible(true);lyr_PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2.setVisible(true);lyr_PercentofBuildingsSuitableforSolar_3.setVisible(true);lyr_SanMateoCountyCityBoundaries_4.setVisible(true);
var layersList = [lyr_OSMBasemap_0,lyr_SolarEnergyGenerationPotentialKilowattHours_1,lyr_PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2,lyr_PercentofBuildingsSuitableforSolar_3,lyr_SanMateoCountyCityBoundaries_4];
lyr_SolarEnergyGenerationPotentialKilowattHours_1.set('fieldAliases', {'STATEFP10': 'STATEFP10', 'COUNTYFP10': 'COUNTYFP10', 'TRACTCE10': 'TRACTCE10', 'GEOID10': 'GEOID10', 'NAME10': 'NAME10', 'NAMELSAD10': 'NAMELSAD10', 'MTFCC10': 'MTFCC10', 'FUNCSTAT10': 'FUNCSTAT10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', 'INTPTLAT10': 'INTPTLAT10', 'INTPTLON10': 'INTPTLON10', 'GISJOIN': 'GISJOIN', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'Final_Sola': 'Percent of Building Suitable for Solar', 'Final_So_1': 'Number of Buildings Suitable for Solar', 'Final_So_2': 'Number of Buildings with Solar Installation', 'Final_So_3': 'Solar Energy Generation Potential (Kilowatt-Hours)', 'Final_So_4': 'Solar Energy Generation Potential of Median Building (Kilowatts)', 'Final_So_5': '# of buildings estimated to have a solar installation, at time of data collection', 'en_pot': 'en_pot', 'pot_en': 'pot_en', });
lyr_PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2.set('fieldAliases', {'STATEFP10': 'STATEFP10', 'COUNTYFP10': 'COUNTYFP10', 'TRACTCE10': 'TRACTCE10', 'GEOID10': 'GEOID10', 'NAME10': 'NAME10', 'NAMELSAD10': 'NAMELSAD10', 'MTFCC10': 'MTFCC10', 'FUNCSTAT10': 'FUNCSTAT10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', 'INTPTLAT10': 'INTPTLAT10', 'INTPTLON10': 'INTPTLON10', 'GISJOIN': 'GISJOIN', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'Final_Sola': 'Percent of Building Suitable for Solar', 'Final_So_1': 'Number of Buildings Suitable for Solar', 'Final_So_2': 'Number of Buildings with Solar Installation', 'Final_So_3': 'Solar Energy Generation Potential (Metric Tons)', 'Final_So_4': 'kW of solar potential for the median building in that region (assuming 250 watts per panel)', 'Final_So_5': 'Carbon Abatement of Full Solar Capacity (Metric Tons)', 'carbon': 'carbon', });
lyr_PercentofBuildingsSuitableforSolar_3.set('fieldAliases', {'STATEFP10': 'STATEFP10', 'COUNTYFP10': 'COUNTYFP10', 'TRACTCE10': 'TRACTCE10', 'GEOID10': 'GEOID10', 'NAME10': 'NAME10', 'NAMELSAD10': 'NAMELSAD10', 'MTFCC10': 'MTFCC10', 'FUNCSTAT10': 'FUNCSTAT10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', 'INTPTLAT10': 'INTPTLAT10', 'INTPTLON10': 'INTPTLON10', 'GISJOIN': 'GISJOIN', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'Final_Sola': 'Percent of Buildings Suitable for Solar', 'Final_So_1': 'Number of Buildings Suitable for Solar', 'Final_So_2': 'Number of Buildings Estimated to Have a Solar Installation', 'Final_So_3': 'total solar energy generation potential for all roof space in that region', 'Final_So_4': 'kW of solar potential for the median building in that region (assuming 250 watts per panel)', 'Final_So_5': '# of buildings estimated to have a solar installation, at time of data collection', '%_suit': '%_suit', });
lyr_SanMateoCountyCityBoundaries_4.set('fieldAliases', {'GISJOIN': 'GISJOIN', 'STATEFP': 'STATEFP', 'PLACEFP': 'PLACEFP', 'PLACENS': 'PLACENS', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'PCICBSA': 'PCICBSA', 'PCINECTA': 'PCINECTA', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SolarEnergyGenerationPotentialKilowattHours_1.set('fieldImages', {'STATEFP10': 'Hidden', 'COUNTYFP10': 'Hidden', 'TRACTCE10': 'Hidden', 'GEOID10': 'Hidden', 'NAME10': 'Hidden', 'NAMELSAD10': 'Hidden', 'MTFCC10': 'Hidden', 'FUNCSTAT10': 'Hidden', 'ALAND10': 'Hidden', 'AWATER10': 'Hidden', 'INTPTLAT10': 'Hidden', 'INTPTLON10': 'Hidden', 'GISJOIN': 'Hidden', 'Shape_area': 'Hidden', 'Shape_len': 'Hidden', 'Final_Sola': 'Hidden', 'Final_So_1': 'Hidden', 'Final_So_2': 'Hidden', 'Final_So_3': 'TextEdit', 'Final_So_4': 'TextEdit', 'Final_So_5': 'Hidden', 'en_pot': 'Hidden', 'pot_en': 'Hidden', });
lyr_PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2.set('fieldImages', {'STATEFP10': 'Hidden', 'COUNTYFP10': 'Hidden', 'TRACTCE10': 'Hidden', 'GEOID10': 'Hidden', 'NAME10': 'Hidden', 'NAMELSAD10': 'Hidden', 'MTFCC10': 'Hidden', 'FUNCSTAT10': 'Hidden', 'ALAND10': 'Hidden', 'AWATER10': 'Hidden', 'INTPTLAT10': 'Hidden', 'INTPTLON10': 'Hidden', 'GISJOIN': 'Hidden', 'Shape_area': 'Hidden', 'Shape_len': 'Hidden', 'Final_Sola': 'Hidden', 'Final_So_1': 'Hidden', 'Final_So_2': 'Hidden', 'Final_So_3': 'Hidden', 'Final_So_4': 'Hidden', 'Final_So_5': 'TextEdit', 'carbon': 'Hidden', });
lyr_PercentofBuildingsSuitableforSolar_3.set('fieldImages', {'STATEFP10': 'Hidden', 'COUNTYFP10': 'Hidden', 'TRACTCE10': 'Hidden', 'GEOID10': 'Hidden', 'NAME10': 'Hidden', 'NAMELSAD10': 'Hidden', 'MTFCC10': 'Hidden', 'FUNCSTAT10': 'Hidden', 'ALAND10': 'Hidden', 'AWATER10': 'Hidden', 'INTPTLAT10': 'Hidden', 'INTPTLON10': 'Hidden', 'GISJOIN': 'Hidden', 'Shape_area': 'Hidden', 'Shape_len': 'Hidden', 'Final_Sola': 'TextEdit', 'Final_So_1': 'TextEdit', 'Final_So_2': 'TextEdit', 'Final_So_3': 'Hidden', 'Final_So_4': 'Hidden', 'Final_So_5': 'Hidden', '%_suit': 'Hidden', });
lyr_SanMateoCountyCityBoundaries_4.set('fieldImages', {'GISJOIN': 'Hidden', 'STATEFP': 'Hidden', 'PLACEFP': 'Hidden', 'PLACENS': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'TextEdit', 'NAMELSAD': 'Hidden', 'LSAD': 'Hidden', 'CLASSFP': 'Hidden', 'PCICBSA': 'Hidden', 'PCINECTA': 'Hidden', 'MTFCC': 'Hidden', 'FUNCSTAT': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'INTPTLAT': 'Hidden', 'INTPTLON': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_SolarEnergyGenerationPotentialKilowattHours_1.set('fieldLabels', {'Final_So_3': 'header label', 'Final_So_4': 'header label', });
lyr_PotentialCarbonAbatementWithFullSolarCapacityMetricTons_2.set('fieldLabels', {'Final_So_5': 'header label', });
lyr_PercentofBuildingsSuitableforSolar_3.set('fieldLabels', {'Final_Sola': 'header label', 'Final_So_1': 'header label', 'Final_So_2': 'header label', });
lyr_SanMateoCountyCityBoundaries_4.set('fieldLabels', {'NAME': 'header label', });
lyr_SanMateoCountyCityBoundaries_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});