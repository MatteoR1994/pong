class PadelSprite {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 12;
        this.color = 'white';
        this.points = 0;
    }
    update(canvas, direction) {
        if (direction === 'up') {
            this.y -= this.speed;
        }
        if (direction === 'down') {
            this.y += this.speed;
        }
        if (this.y <= 0) {
            this.y = 0;
        }
        if (this.y >= (canvas.height - this.height)) {
            this.y = (canvas.height - this.height);
        }
    }
    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

class BallSprite {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speedX = 5;
        this.speedY = 5;
        this.color = 'white';
    }
    startMove(canvas, context, player1, player2) {
        const moveInterval = setInterval(() => {
            Environment.drawMiddleLine(canvas, context);
            context.clearRect(this.x, this.y, this.width, this.height);
            this.x = this.x + this.speedX;
            this.y = this.y + this.speedY;
            if ((this.x === (player1.x + player1.width)) &&
                ((player1.y >= this.y && player1.y <= this.y + this.height) || (player1.y + player1.height >= this.y && player1.y + this.height <= this.y + this.height))) {
                this.speedX = this.speedX * -1;
            }
            if ((this.x + this.width === player2.x) &&
                ((player2.y >= this.y && player2.y <= this.y + this.height) || (player2.y + player2.height >= this.y && player2.y + this.height <= this.y + this.height))) {
                this.speedX = this.speedX * -1;
            }
            if (this.x > canvas.width - this.width || this.x < 0) {
                this.speedX = this.speedX * -1;
            }
            if (this.y > canvas.height - this.height || this.y < 0) {
                this.speedY = this.speedY * -1;
            }
            if (this.x === 0) {
                player2.points++;
                clearInterval(moveInterval);
                Environment.displayScore(canvas, context, player1.points, player2.points);
            }
            if (this.x + this.width === canvas.width) {
                player1.points++;
                clearInterval(moveInterval);
                Environment.displayScore(canvas, context, player1.points, player2.points);
            }
            ball.draw(context);
        }, 30);
    }
    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}