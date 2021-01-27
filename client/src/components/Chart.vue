<template>
    <div>
        
        <div id="column-chart"></div>
    </div>
</template>

<script>
export default {

    mounted() {
        window.fetch('http://api.le-systeme-solaire.net/rest/bodies/').then((response) => {
            response.json().then((json) => {
                console.log(json);
                let bodies = json.bodies;
                let planets = bodies.filter((body) => body.isPlanet);
                this.drawColumnChart(planets);
            });
        })
    },

    methods: {

        drawColumnChart(planets) {
            google.charts.load("current", {packages:['corechart']});
            google.charts.setOnLoadCallback(drawChart);
            function drawChart() {
            
                let planetChartData = planets.map((planet) => {
                    let {englishName, meanRadius} = planet;
                    return [englishName, meanRadius, 'blue'];
                })

                let dataPoints = [
                    ["Planet", "Radius", { role: "style" } ],
                    ...planetChartData
                ]
                var data = google.visualization.arrayToDataTable(dataPoints);

                var view = new google.visualization.DataView(data);
                view.setColumns([0, 1,
                                { calc: "stringify",
                                    sourceColumn: 1,
                                    type: "string",
                                    role: "annotation" },
                                2]);

                var options = {
                    title: "Radius of the planets in Solar System",
                    width: 900,
                    height: 400,
                    bar: {groupWidth: "95%"},
                    legend: { position: "none" },
                };
                var chart = new google.visualization.ColumnChart(document.getElementById("column-chart"));
                chart.draw(view, options);
            }
        }
    }
}
</script>