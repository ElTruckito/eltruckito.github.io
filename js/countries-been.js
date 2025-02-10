am5.ready(function () {

// Data
    const groupData = [
        {
            "name": "Stage 1: The New World: Americas",
            "data": [
                {"id": "US", "year": "2022"},
                {"id": "AR", "year": "2022"},
                {"id": "UY", "year": "2022"},
                {"id": "BR", "year": "2022"},
                {"id": "CL", "year": "2022"},
                {"id": "PY", "year": "2023"},
                {"id": "BO", "year": "2023"},
                {"id": "PE", "year": "2023"},
                {"id": "EC", "year": "2024"},
                {"id": "CO", "year": "2024"},
                {"id": "PA", "year": "2024"},
                {"id": "SR", "year": "2024"},
                {"id": "GF", "year": "2024"},
                {"id": "GY", "year": "2024"},
                {"id": "PA", "year": "2024"},
                {"id": "CR", "year": "2024"},
                {"id": "NI", "year": "2024"},
                {"id": "HN", "year": "2024"},
                {"id": "SV", "year": "2024"},
                {"id": "GT", "year": "2024"},
                {"id": "BZ", "year": "2024"},
                {"id": "MX", "year": "2024"},
                {"id": "CA", "year": "2024"},
            ]
        },
    ];


// Create root and chart
    var root = am5.Root.new("chartdiv");

    // currently Mexico
    var rotation_current_country = {y: 42.3555, x: -71.0565}

// Create chart
    var chart = root.container.children.push(am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "rotateY",
        rotationX: -rotation_current_country.x,
        rotationY: -rotation_current_country.y,
        projection: am5map.geoOrthographic(),
    }));


// Create world polygon series
    var worldSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: []
    }));

    worldSeries.mapPolygons.template.setAll({
        fill: am5.color(0xaaaaaa)
    });

    worldSeries.events.on("datavalidated", function () {
        const zoomTargets = ["US", "CO"];
        const zoomDataItems = [];
        zoomTargets.forEach(function (id) {
            zoomDataItems.push(worldSeries.getDataItemById(id));
        });
        worldSeries.zoomToDataItems(zoomDataItems);
    });


// Add legend
    var legend = chart.children.push(am5.Legend.new(root, {
        useDefaultMarker: true,
        centerX: am5.p50,
        x: am5.p50,
        centerY: am5.p100,
        y: am5.p100,
        dy: -20,
        background: am5.RoundedRectangle.new(root, {
            fill: am5.color(0xffffff),
            fillOpacity: 0.2
        })
    }));

    legend.valueLabels.template.set("forceHidden", true)


// Create series for each group
    var colors = am5.ColorSet.new(root, {
        step: 2
    });
    colors.next();

    am5.array.each(groupData, function (group) {
        var countries = [];
        var color = colors.next();

        am5.array.each(group.data, function (country) {
            countries.push(country.id)
        });

        var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
            geoJSON: am5geodata_worldLow,
            include: countries,
            name: group.name,
            fill: color
        }));


        polygonSeries.mapPolygons.template.setAll({
            tooltipText: "El Truckito first visited [bold]{name}[/]\nin {year}",
            interactive: true,
            fill: color,
            strokeWidth: 2
        });

        polygonSeries.mapPolygons.template.states.create("hover", {
            fill: am5.Color.brighten(color, -0.3)
        });

        polygonSeries.mapPolygons.template.events.on("pointerover", function (ev) {
            ev.target.series.mapPolygons.each(function (polygon) {
                polygon.states.applyAnimate("hover");
            });
        });

        polygonSeries.mapPolygons.template.events.on("pointerout", function (ev) {
            ev.target.series.mapPolygons.each(function (polygon) {
                polygon.states.applyAnimate("default");
            });
        });
        polygonSeries.data.setAll(group.data);

        legend.data.push(polygonSeries);
    });

    // GeoJSON data
    var tokens = {
        type: "FeatureCollection",
        features: [{
            type: "Feature",
            properties: {
                name: "Truckito",
                pictureSettings: {
                    src: "/images/avatars/animated-truckito.webp"

                }
            },
            geometry: {
                type: "Point",
                coordinates: [rotation_current_country.x, rotation_current_country.y]
            }
        }]
    };

// Create point series
    var pointSeries = chart.series.push(
        am5map.MapPointSeries.new(root, {
            geoJSON: tokens
        })
    );

    pointSeries.bullets.push(function (root, series, dataItem) {
        var container = am5.Container.new(root, {});

        container.children.push(am5.Picture.new(root, {
            templateField: "pictureSettings",
            width: 55,
            centerX: am5.p50,
            centerY: am5.p50,
            forceInactive: true
        }));

        var circle = container.children.push(am5.Circle.new(root, {
            radius: 15,
            stroke: am5.color(0xB4E1FF),
            fill: am5.color(0xB4E1FF),
            strokeWidth: 4,
            tooltipText: "{name}"
        }));

        container.set("mask", circle);

        return am5.Bullet.new(root, {
            sprite: container
        });
    });

}); // end am5.ready()
