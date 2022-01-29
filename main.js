canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "gray";
ctx.lineWidth = 2;
ctx.rect(200, 200, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(290, 270, 60, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(380, 270, 60, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(480, 270, 60, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "sandybrown";
ctx.lineWidth = 5;
ctx.arc(420, 340, 60, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(340, 340, 60, 0, 2 * Math.PI);
ctx.stroke();