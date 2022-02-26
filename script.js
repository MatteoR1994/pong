const canvas = document.getElementById('canvas');
const context = this.canvas.getContext('2d');

const player1 = new PadelSprite(30, 225, 20, 150);
const player2 = new PadelSprite(this.canvas.width - 50, 225, 20, 150);
const ball = new BallSprite((this.canvas.width / 2) - 10, (this.canvas.height / 2) - 10, 20, 20);

player1.draw(context);
player2.draw(context);
ball.draw(context);
Environment.displayScore(canvas, context, player1.points, player2.points);
Environment.drawMiddleLine(canvas, context);

document.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
        case 32: // Spazio - inizia il movimento della pallina
            ball.startMove(canvas, context, player1, player2);
            break;
        case 38: // Player 2 - UP
            context.clearRect(player2.x, player2.y, player2.width, player2.height);
            player2.update(canvas, 'up');
            player2.draw(context);
            break;
        case 40: // Player 2 - DOWN
            context.clearRect(player2.x, player2.y, player2.width, player2.height);
            player2.update(canvas, 'down');
            player2.draw(context);
            break;
        case 83: // Player 1 - DOWN
            context.clearRect(player1.x, player1.y, player1.width, player1.height);
            player1.update(canvas, 'down');
            player1.draw(context);
            break;
        case 87: // Player 1 - UP
            context.clearRect(player1.x, player1.y, player1.width, player1.height);
            player1.update(canvas, 'up');
            player1.draw(context);
            break;
    }
});