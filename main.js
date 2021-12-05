
var Temperature = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.1.1.json",

    "description": "Lab 9",
    "title": "Average Annual Temperature (ºF)",
    "data": {"url": "temperature.csv"},

    "vconcat": [ {
    "width": 500,
    "height": 500,
    "layer": [
    {
        "mark": {
            "type": "area",
            "line": {
              "color": "firebrick"
            },
            "color": {
              "x1": 1,
              "y1": 1,
              "x2": 1,
              "y2": 0,
              "gradient": "linear",
              "stops": [
                {
                  "offset": 0.925,
                  "color": "white"
                },
                {
                  "offset": 1,
                  "color": "firebrick"
                }
              ]
            }, "tooltip": true, "clip": true,
          },
        "encoding": {
            "x": {"field": "date", "type": "temporal", "title": "Year"},
            "y": {"field": "temp", "type": "quantitative", "scale": {"domain": [50,56]}, "title": "Average Annual Temperature (ºF) "}
            
        }
    },
    /*{
        "mark": {
            "type": "line",
            "color": "white"
        },
        "transform": [
            {
            "regression": "temp",
            "on": "date"
            }
        ],
        "encoding": {
            "x": {
            "field": "date",
            "type": "temporal"
            },
            "y": {
            "field": "temp",
            "type": "quantitative"
            }
        }
    }*/]
    
    }],
};

var SeaLevel = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.1.1.json",

    "description": "Lab 9",
    "title": "Adjusted Sea Level Rise Since 1880 in Inches",
    "data": {"url": "sealevel.csv"},

    "vconcat": [ {
    "width": 500,
    "height": 500,
    "layer": [
    {
        "mark": { "type": "area", "tooltip": true},
        "encoding": {
            "x": {"field": "date", "type": "temporal", "title": "Year"},
            "y": {"field": "sealevel", "type": "quantitative", "title": "Adjusted Sea Level in Inches"}
            
        }
    }]
    
    }],
};

var US_Carbon = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.1.1.json",

    "description": "Lab 9",
    "title": "US Annual CO2 Emmisions (Tons/Year)",
    "data": {"url": "USCarbon.csv"},

    "vconcat": [ {
    "width": 400,
    "height": 350,
    "mark": { "type": "line", "tooltip": true},
    "encoding": {
        "x": {"field": "date", "type": "temporal", "title": "Year"},
        "y": {"field": "carbon", "type": "quantitative", "axis": {"format": "e"}, "title": "Tons of CO2 Emitted"}  
    },
    }],
};
var Global_Carbon = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.1.1.json",

    "description": "Lab 9",
    "title": "Global Annual CO2 Emmisions (Billion Tons/Year)",
    "data": {"url": "co2_global.csv"},

    "vconcat": [ {
    "width": 600,
    "height": 400,
    "mark": { "type": "line", "tooltip": true},
    "encoding": {
        "x": {"field": "date", "type": "temporal", "title": "Year"},
        "y": {"field": "carbon", "type": "quantitative", "title": "CO2 Emitted (Billion Tons)"}  
    },
    }],
};

var Per_Capita = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.1.1.json",

    "description": "Lab 9",
    "title": "US Per Capita Carbon Emmisions (Tons/Year)",
    "data": {"url": "per_capita.csv"},

    "vconcat": [ {
    "width": 400,
    "height": 350,
    "mark": { "type": "line", "tooltip": true},
    "encoding": {
        "x": {"field": "date", "type": "temporal", "title": "Year"},
        "y": {"field": "carbon", "type": "quantitative", "title": "Per Capita CO2 Emissions"}  
    },
    }],
};

var Emission_Type = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.1.1.json",

    "description": "Lab 9",
    "title": "US Per Capita Carbon Emmisions (Tons/Year)",
    "data": {"url": "emission_type.csv"},
    "repeat": {
        "layer": ['oil',"coal",'gas','cement','flaring','other']
    },
    "spec": {
    "width": 500,
    "height": 500,
    "mark": { "type": "area", "tooltip": true},
    "encoding": {
        "x": {"field": "date", "type": "temporal","title": "Date", "title": "Year"},
        "y": {"aggregate": "sum", "field": {"repeat": "layer"}, "type": "quantitative", "title": "CO2 Emissions (Tons)" },
        "color": {
        "datum": {"repeat": "layer"},
        "type": "nominal"
  }
    },
    },
};


var State_Temp = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.1.1.json",

    "description": "Lab 9",
    "title": "Average State Temperatures in the U.S",
    "data": {"url": "state_temp.csv"},

    "params": [{
    "name": "State", "value": "Alabama",
    "select": {"type": "point", "fields": ["Location"]},

    "bind": {"input": "select", "options": ["Alabama", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "U.S. Virgin Islands", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]}
    },

    { "name": "Year_Born", "value": 1895,
    "bind": {"input": "range", "min": 1895, "max": 2021, "step": 1, } },
    
    ],

    "transform": [
        {"filter": {"timeUnit":"month", "field":"Date","equal":"June"}},
        {"filter": {"timeUnit":"year", "field": "Date", "gte": "Year_Born"}}
     ],


    "vconcat": [ {
    "width": 700,
    "height": 500,

    "mark": { "type": "line", "tooltip": true},
    "encoding": {
        "x": {"field": "Date", "title": "Year", "type": "temporal",
            "condition":{
                "param":"yearBorn",
                
                
            }},
        "y": {"field": "Value", "title": "Temperature (ºF)", "type": "quantitative","scale": {"domain": [55,90]}},
        "color": {
            "condition":{
                "param":"State",
                "field": "Location",
                "scale": {"scheme": "sinebow"}
                },
            "value":"grey"
            },

        "opacity":{
            "condition":{
                "param":"State",
                "field": "Location",
                "value":"1"
                },
            "value":"0.025"
            },

        },
    }],
};

var Cost = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Estimated Cost of Sea Level Rise by 2100 (Billions of USD)",
    "description": "Estimated Cost of Sea Level Rise by 2100 (Billions of USD)",
    "width": 550,
    "height": 500,
    "data": {"url": "sealevel_cost.csv"},
    "mark": {"type": "bar", "tooltip": true},
    "encoding": {
        "x": {"field": "state", "type": "nominal", "sort": "y", "title": "State"},
        "y": {"field": "cost", "type": "quantitative", "sort": "ascending", "title": "Cost (Billion USD)"}
    }
};

vegaEmbed('#globalchart', Global_Carbon);
vegaEmbed("#US-Chart", US_Carbon);
vegaEmbed("#Co2-Chart", Per_Capita)
vegaEmbed("#EmissionsBy-Chart", Emission_Type)
vegaEmbed("#cost-Chart", Cost)
vegaEmbed('#line-chart', State_Temp)
vegaEmbed('#sealevel', SeaLevel)
vegaEmbed('#temperature', Temperature)