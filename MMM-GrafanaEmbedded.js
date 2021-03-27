/* MMM-GrafanaEmbedded
 * This MagicMirror² module allows you to embed grafana panel.
 *
 * By Eirik Holst
 * MIT Licensed.
 */

Module.register("MMM-GrafanaEmbedded", {
    // Default module config.
    defaults: {
        height:"200",
        width:"450"
    },

    // Define start sequence.
    start: function() {
        Log.info("Starting module: " + this.name);
    },
    // Override dom generator.
    getDom: function() {
        var iframe = document.createElement("IFRAME");
        const {host, port, id, orgId, dashboardName, refreshRate, from, to, panelId, width, height} = this.config;
        // todo: README time range controls https://grafana.com/docs/grafana/latest/dashboards/time-range-controls
        iframe.width = width;
        iframe.height = height;
        iframe.style = "border:0"
        iframe.frameborder = "0"
        iframe.src =  `http://${host}:${port}/d-solo/${id}/${dashboardName}?kiosk=&orgId=${orgId}&refresh=${refreshRate}&from=${from}&to=${to}&panelId=${panelId}`;
        return iframe;
    }
});
