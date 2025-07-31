import Plot from "react-plotly.js";
export default function TrackMap({ coordinates }) {
  return (
    coordinates ?
    <Plot
      data={[
        { x: coordinates.x, y: coordinates.y, type: "scatter", mode: "lines", line: {color: "#2c333a", width: 4} },
      ]}
      layout={
        { 
            margin: {t: 0, r: 0, l: 0 , b: 0}, 
            xaxis: {
                showgrid: false,
                zeroline: false,
                visible: false,
                scaleanchor: "y"
            },
            yaxis:{
                showgrid: false,
                zeroline: false,
                visible: false
            },
            paper_bgcolor: "transparent",
            plot_bgcolor: "transparent",
        }}
        config={
            {
                displayModeBar: false,
                staticPlot: true,
            }
        }
        style={
            {
                width: "100%",
                height: "100%"
            }
        }
        
    />
    :
    <div>No data</div>
  );
}
