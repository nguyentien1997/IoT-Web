var barTemp = new ProgressBar.SemiCircle(temperature, {
    strokeWidth: 15,
    color: "#25d025",
    trailColor: "#eee",
    trailWidth: 15,
    easing: "easeInOut",
    duration: 1400,
    svgStyle: null,
    text: {
        value: "",
        alignToBottom: false,
    },
    from: { color: "#28a745" },
    to: { color: "#dc3545" },
    // Set default step function for all animate calls
    step: (state, bar) => {
        bar.path.setAttribute("stroke", state.color);
        var value = Math.round(bar.value() * 50) + " °C";
        if (value === 0) {
            bar.setText("");
        } else {
            bar.setText(value);
        }

        bar.text.style.color = state.color;
    },
});
// barTemp.animate(0.50);


var barHump = new ProgressBar.SemiCircle(humidity, {
    strokeWidth: 15,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 15,
    easing: "easeInOut",
    duration: 1400,
    svgStyle: null,
    text: {
        value: "",
        alignToBottom: false,
    },
    from: { color: "#28a745" },
    to: { color: "#dc3545" },
    // Set default step function for all animate calls
    step: (state, bar) => {
        bar.path.setAttribute("stroke", state.color);
        var value = Math.round(bar.value() * 100) + " %";
        if (value === 0) {
            bar.setText("");
        } else {
            bar.setText(value);
        }

        bar.text.style.color = state.color;
    },
});
// barHump.animate(0.40);


var barLight = new ProgressBar.SemiCircle(light, {
    strokeWidth: 15,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 15,
    easing: "easeInOut",
    duration: 1400,
    svgStyle: null,
    text: {
        value: "",
        alignToBottom: false,
    },
    from: { color: "#28a745" },
    to: { color: "#dc3545" },
    // Set default step function for all animate calls
    step: (state, bar) => {
        bar.path.setAttribute("stroke", state.color);
        var value = Math.round(bar.value() * 100) + " %";
        if (value === 0) {
            bar.setText("");
        } else {
            bar.setText(value);
        }

        bar.text.style.color = state.color;
    },
});
// barLight.animate(0.59);

var barEc = new ProgressBar.SemiCircle(ec, {
    strokeWidth: 15,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 15,
    easing: "easeInOut",
    duration: 1400,
    svgStyle: null,
    text: {
        value: "",
        alignToBottom: false,
    },
    from: { color: "#E9CB04" },
    to: { color: "#FAA203" },
    // Set default step function for all animate calls
    step: (state, bar) => {
        bar.path.setAttribute("stroke", state.color);
        var value = Math.round(bar.value() * 100) + " %";
        if (value === 0) {
            bar.setText("");
        } else {
            bar.setText(value);
        }

        bar.text.style.color = state.color;
    },
});
barEc.animate(0.40);

var barpH = new ProgressBar.SemiCircle(pH, {
    strokeWidth: 15,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 15,
    easing: "easeInOut",
    duration: 1400,
    svgStyle: null,
    text: {
        value: "",
        alignToBottom: false,
    },
    from: { color: "#E9CB04" },
    to: { color: "#FAA203" },
    // Set default step function for all animate calls
    step: (state, bar) => {
        bar.path.setAttribute("stroke", state.color);
        var value = Math.round(bar.value() * 100) + " %";
        if (value === 0) {
            bar.setText("");
        } else {
            bar.setText(value);
        }

        bar.text.style.color = state.color;
    },
});
barpH.animate(0.59);


var barEc2 = new ProgressBar.SemiCircle(ec2, {
    strokeWidth: 15,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 15,
    easing: "easeInOut",
    duration: 1400,
    svgStyle: null,
    text: {
        value: "",
        alignToBottom: false,
    },
    from: { color: "#E9CB04" },
    to: { color: "#FAA203" },
    // Set default step function for all animate calls
    step: (state, bar) => {
        bar.path.setAttribute("stroke", state.color);
        var value = Math.round(bar.value() * 100) + " %";
        if (value === 0) {
            bar.setText("");
        } else {
            bar.setText(value);
        }

        bar.text.style.color = state.color;
    },
});
barEc2.animate(0.40);

var barpH2 = new ProgressBar.SemiCircle(pH2, {
    strokeWidth: 15,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 15,
    easing: "easeInOut",
    duration: 1400,
    svgStyle: null,
    text: {
        value: "",
        alignToBottom: false,
    },
    from: { color: "#E9CB04" },
    to: { color: "#FAA203" },
    // Set default step function for all animate calls
    step: (state, bar) => {
        bar.path.setAttribute("stroke", state.color);
        var value = Math.round(bar.value() * 100) + " %";
        if (value === 0) {
            bar.setText("");
        } else {
            bar.setText(value);
        }

        bar.text.style.color = state.color;
    },
});
barpH2.animate(0.59);

// const xhr = new XMLHttpRequest();
// const url = 'http://192.168.60.59:8080/json';
// var data;

// setInterval(function () {
//     xhr.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             // Typical action to be performed when the document is ready:
//             data = JSON.parse(xhr.response);
//             // console.log(data);
//         }
//     };

//     xhr.open('GET', url);
//     xhr.send();

//     if (barLight) {
//         barLight.animate(data['light'] / 100);
//     }
//     if (barTemp) {
//         barTemp.animate(data['temp'] / 50);
//     }
//     if (barHump) {
//         barHump.animate(data['hump'] / 100);
//     }
// }, 1000);
