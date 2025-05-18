am5.ready(function () {

    // ---------------------
    // Data
    // ---------------------
    const groupData = [
        {
            name: "Stage 1: The New World: Americas",
            data: [
                { id: "US", year: "2022" },
                { id: "AR", year: "2022" },
                { id: "UY", year: "2022" },
                { id: "BR", year: "2022" },
                { id: "CL", year: "2022" },
                { id: "PY", year: "2023" },
                { id: "BO", year: "2023" },
                { id: "PE", year: "2023" },
                { id: "EC", year: "2024" },
                { id: "CO", year: "2024" },
                { id: "PA", year: "2024" },
                { id: "SR", year: "2024" },
                { id: "GF", year: "2024" },
                { id: "GY", year: "2024" },
                { id: "CR", year: "2024" },
                { id: "NI", year: "2024" },
                { id: "HN", year: "2024" },
                { id: "SV", year: "2024" },
                { id: "GT", year: "2024" },
                { id: "BZ", year: "2024" },
                { id: "MX", year: "2024" },
                { id: "CA", year: "2024" }
            ]
        },
        {
            name: "US States",
            geoJSON: am5geodata_usaLow,
            data: [
                { id: "US-AL", year: "2022" }, // Alabama
                // { id: "US-AK", year: "2024" }, // Alaska
                { id: "US-AZ", year: "2024" }, // Arizona
                { id: "US-AR", year: "2021" }, // Arkansas
                { id: "US-CA", year: "2020" }, // California
                { id: "US-CO", year: "2024" }, // Colorado
                { id: "US-CT", year: "2020" }, // Connecticut
                { id: "US-DE", year: "2021" }, // Delaware
                { id: "US-FL", year: "2021" }, // Florida
                { id: "US-GA", year: "2021" }, // Georgia
                // { id: "US-HI", year: "2024" }, // Hawaii
                // { id: "US-ID", year: "2024" }, // Idaho
                { id: "US-IL", year: "2024" }, // Illinois
                { id: "US-IN", year: "2021" }, // Indiana
                { id: "US-IA", year: "2021" }, // Iowa
                { id: "US-KS", year: "2020" }, // Kansas
                { id: "US-KY", year: "2022" }, // Kentucky
                { id: "US-LA", year: "2022" }, // Louisiana
                { id: "US-ME", year: "2020" }, // Maine
                { id: "US-MD", year: "2021" }, // Maryland
                { id: "US-MA", year: "2020" }, // Massachusetts
                { id: "US-MI", year: "2024" }, // Michigan
                { id: "US-MN", year: "2020" }, // Minnesota
                { id: "US-MS", year: "2022" }, // Mississippi
                { id: "US-MO", year: "2020" }, // Missouri
                { id: "US-MT", year: "2020" }, // Montana
                { id: "US-NE", year: "2020" }, // Nebraska
                { id: "US-NV", year: "2024" }, // Nevada
                { id: "US-NH", year: "2020" }, // New Hampshire
                { id: "US-NJ", year: "2020" }, // New Jersey
                { id: "US-NM", year: "2024" }, // New Mexico
                { id: "US-NY", year: "2020" }, // New York
                { id: "US-NC", year: "2022" }, // North Carolina
                { id: "US-ND", year: "2020" }, // North Dakota
                { id: "US-OH", year: "2020" }, // Ohio
                { id: "US-OK", year: "2021" }, // Oklahoma
                // { id: "US-OR", year: "2024" }, // Oregon
                { id: "US-PA", year: "2020" }, // Pennsylvania
                { id: "US-RI", year: "2020" }, // Rhode Island
                { id: "US-SC", year: "2022" }, // South Carolina
                { id: "US-SD", year: "2020" }, // South Dakota
                { id: "US-TN", year: "2022" }, // Tennessee
                { id: "US-TX", year: "2024" }, // Texas
                { id: "US-UT", year: "2024" }, // Utah
                { id: "US-VT", year: "2020" }, // Vermont
                { id: "US-VA", year: "2022" }, // Virginia
                // { id: "US-WA", year: "2024" }, // Washington
                { id: "US-WV", year: "2022" }, // West Virginia
                // { id: "US-WI", year: "2024" }, // Wisconsin
                { id: "US-WY", year: "2020" }  // Wyoming
            ]
        },
        {
            name: "Canadian Provinces",
            geoJSON: am5geodata_canadaLow,
            data: [
                // { id: "CA-AB", year: "2025" }, // Alberta
                // { id: "CA-BC", year: "2025" }, // British Columbia
                // { id: "CA-MB", year: "2024" }, // Manitoba
                // { id: "CA-NB", year: "2024" }, // New Brunswick
                // { id: "CA-NL", year: "2024" }, // Newfoundland and Labrador
                // { id: "CA-NS", year: "2024" }, // Nova Scotia
                // { id: "CA-NT", year: "2025" }, // Northwest Territories
                // { id: "CA-NU", year: "2024" }, // Nunavut
                { id: "CA-ON", year: "2024" }, // Ontario
                // { id: "CA-PE", year: "2024" }, // Prince Edward Island
                // { id: "CA-QC", year: "2024" }, // Quebec
                // { id: "CA-SK", year: "2024" }, // Saskatchewan
                // { id: "CA-YT", year: "2025" }  // Yukon
            ]
        }
    ];

    // ---------------------
    // Create root & chart
    // ---------------------
    var root = am5.Root.new("chartdiv");

    var rotation_current_country = { y: 42.3555, x: -71.0565 };

    var chart = root.container.children.push(am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "rotateY",
        rotationX: -rotation_current_country.x,
        rotationY: -rotation_current_country.y,
        projection: am5map.geoOrthographic()
    }));

    // ---------------------
    // Base world layer
    // ---------------------
    var worldSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow
    }));

    worldSeries.mapPolygons.template.setAll({
        fill: am5.color(0xaaaaaa)
    });

    worldSeries.events.on("datavalidated", function () {
        const zoomTargets = ["US", "CO"];
        const zoomDataItems = zoomTargets.map(id => worldSeries.getDataItemById(id));
        worldSeries.zoomToDataItems(zoomDataItems);
    });

    // ---------------------
    // Legend
    // ---------------------
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

    legend.valueLabels.template.set("forceHidden", true);

    // ---------------------
    // Visited country/state series
    // ---------------------
    var colors = am5.ColorSet.new(root, { step: 2 });

    am5.array.each(groupData, function (group) {
        var ids = group.data.map(item => item.id);
        var color = colors.next();

        var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
            geoJSON: group.geoJSON || am5geodata_worldLow,
            include: ids,
            name: group.name,
            fill: color
        }));

        polygonSeries.mapPolygons.template.setAll({
            tooltipText: "El Truckito visited [bold]{name}[/]\nin {year}",
            interactive: true,
            fill: color,
            stroke: am5.color(0xffffff),
            strokeWidth: 1.5,
            strokeDasharray: group.geoJSON === am5geodata_usaLow ? [4, 4] : undefined
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

    // ---------------------
    // Truckito Marker
    // ---------------------
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

    var pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {
        geoJSON: tokens
    }));

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
