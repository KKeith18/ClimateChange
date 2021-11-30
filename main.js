
var Temperature = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.1.1.json",

    "description": "Lab 9",
    "title": "Average Annual Temperature (ºF)",
    "data": {"url": "temperature.csv"},

    "vconcat": [ {
    "width": 700,
    "height": 500,
    "layer": [
    {
        "mark": { "type": "line", "tooltip": true},
        "encoding": {
            "x": {"field": "date", "type": "temporal"},
            "y": {"field": "temp", "type": "quantitative", "scale": {"domain": [50,55]}}
            
        }
    },
    {
        "mark": {
            "type": "line",
            "color": "firebrick"
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
    }]
    
    }],
};

var US_Carbon = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.1.1.json",

    "description": "Lab 9",
    "title": "US Carbon Annual Emmisions (Billion Tons/Year)",
    "data": {"url": "USCarbon.csv"},

    "vconcat": [ {
    "width": 700,
    "height": 500,
    "mark": { "type": "line", "tooltip": true},
    "encoding": {
        "x": {"field": "date", "type": "temporal"},
        "y": {"field": "carbon", "type": "quantitative", "axis": {"format": "e"}}  
    },
    }],
};
var Global_Carbon = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.1.1.json",

    "description": "Lab 9",
    "title": "Global Annual Carbon Emmisions (Billion Tons/Year)",
    "data": {"url": "co2_global.csv"},

    "vconcat": [ {
    "width": 700,
    "height": 500,
    "mark": { "type": "line", "tooltip": true},
    "encoding": {
        "x": {"field": "date", "type": "temporal"},
        "y": {"field": "carbon", "type": "quantitative"}  
    },
    }],
};

var Per_Capita = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.1.1.json",

    "description": "Lab 9",
    "title": "US Per Capita Carbon Emmisions (Tons/Year)",
    "data": {"url": "per_capita.csv"},

    "vconcat": [ {
    "width": 700,
    "height": 500,
    "mark": { "type": "line", "tooltip": true},
    "encoding": {
        "x": {"field": "date", "type": "temporal"},
        "y": {"field": "carbon", "type": "quantitative"}  
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
    "width": 700,
    "height": 500,
    "mark": { "type": "area", "tooltip": true},
    "encoding": {
        "x": {"field": "date", "type": "temporal","title": "Date"},
        "y": {"aggregate": "sum", "field": {"repeat": "layer"}, "type": "quantitative", "title": "Sum of Carbon Emissions (Tons)" },
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
    "transform": [
        {"filter": {"timeUnit":"month", "field":"Date","equal":"July"}},
     ],

    "params": [{
    "name": "State",
    "select": {"type": "point", "fields": ["Location"]},

    "bind": {"input": "select", "options": [null, "Alabama", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "U.S. Virgin Islands", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]}
    },

    { "name": "yearBorn", "value": 1895,
    "bind": {"input": "range", "min": 1895, "max": 2021, "step": 1} },
    
    ],

    "vconcat": [ {
    "width": 700,
    "height": 500,

    "mark": { "type": "line", "tooltip": true},
    "encoding": {
        "x": {"field": "Date", "type": "temporal",
            "condition":{
                "param":"yearBorn",
                
                
            }},
        "y": {"field": "Value", "type": "quantitative"},
        "color": {
            "condition":{
                "param":"State",
                "field": "Location",
                "scale": {"scheme": "category20b"}
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
    "width": 700,
    "height": 500,
    "data": {"url": "sealevel_cost.csv"},
    "mark": {"type": "bar", "tooltip": true},
    "encoding": {
        "x": {"field": "state", "type": "nominal", "sort": "y"},
        "y": {"field": "cost", "type": "quantitative", "sort": "ascending"}
    }
};

vegaEmbed('#globalchart', Global_Carbon);
vegaEmbed("#US-Chart", US_Carbon);
vegaEmbed("#Co2-Chart", Per_Capita)
vegaEmbed("#EmissionsBy-Chart", Emission_Type)
vegaEmbed("#cost-Chart", Cost)
vegaEmbed('#line-chart', State_Temp)