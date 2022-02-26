class Environment {

    static drawMiddleLine(canvas, context) {
        context.strokeStyle = 'white';
        context.beginPath();
        context.setLineDash([10, 10]);
        context.moveTo(canvas.width / 2, 0);
        context.lineTo(canvas.width / 2, canvas.height);
        context.stroke();
    }

    static displayScore(canvas, context, pointPlayer1, pointPlayer2) {
        context.clearRect(100, 10, 300, 30);
        context.fillStyle = 'white';
        const textPointP1Size = context.measureText(pointPlayer1).width;
        const textPointP2Size = context.measureText(pointPlayer1).width;
        context.font = '48px RetroGameFont';
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(pointPlayer1, ((canvas.width / 2) - (textPointP1Size / 2 + 30 + textPointP1Size)), 50);
        context.fillText(pointPlayer2, ((canvas.width / 2) + (textPointP2Size / 2 + 30 + textPointP2Size)), 50);
    }
}