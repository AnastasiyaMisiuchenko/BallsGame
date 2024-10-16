
class BallPhysics{

    static checkCollisionWithWalls(ball, config){
        if (ball.vector.x + ball.radius + ball.x > config.width){
            this.resolveCollisionWithRightLeftWall(ball);
        }
        if (ball.vector.x - ball.radius + ball.x < 0){
            this.resolveCollisionWithRightLeftWall(ball);
        }
        if (ball.vector.y + ball.radius + ball.y > config.height){
            this.resolveCollisionWithBotTopWall(ball);
        }
        if (ball.vector.y - ball.radius + ball.y < 0){
            this.resolveCollisionWithBotTopWall(ball);
        }
    }

    static resolveCollisionWithRightLeftWall(ball){
        ball.vector.x *= -1;
    }

    static resolveCollisionWithBotTopWall(ball){
        ball.vector.y *= -1;
    }

    // static  processCollision(balls){
    //     for (let i = 0; i < balls.length; i++){
    //         for (let j = i + 1; j < balls.length; j++){
    //             balls.physics.add.collider(balls[i], balls[j]);
    //         }
    //     }
    // }

    static processCollision(balls){
        for (let i = 0; i < balls.length; i++){
            for (let j = i + 1; j < balls.length; j++){
                if (this.checkCollision(balls[i], balls[j])){
                    this.handleCollision(balls[i], balls[j]);
                }
            }
        }
    }

    static handleCollision(ball1, ball2) {
        // Рассчитываем разницу в позициях
        let dx = ball1.x - ball2.x;
        let dy = ball1.y - ball2.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        // Если шарики очень близки (для избежания деления на ноль)
        if (distance === 0) {
            distance = 1;
        }

        // Нормализуем вектор направления столкновения
        let normalX = dx / distance;
        let normalY = dy / distance;

        // Рассчитываем разницу в скоростях
        let velocityXDiff = ball2.vector.x - ball1.vector.x;
        let velocityYDiff = ball2.vector.y - ball1.vector.y;

        // Скалярное произведение разности скоростей и нормали
        let dotProduct = velocityXDiff * normalX + velocityYDiff * normalY;

        // Если скорости направлены друг от друга, игнорируем столкновение
        if (dotProduct > 0) {
            return;
        }

        // Рассчитываем импульс
        let massSum = ball1.mass + ball2.mass;
        let impulse = (2 * dotProduct) / massSum;

        // Обновляем скорости шариков на основе импульса и нормали
        ball1.vector.x -= (impulse * ball2.mass * normalX);
        ball1.vector.y -= (impulse * ball2.mass * normalY);

        ball2.vector.x += (impulse * ball1.mass * normalX);
        ball2.vector.y += (impulse * ball1.mass * normalY);


    }

    static checkCollision(firstBall, secondBall){
        const distanceX = secondBall.x - firstBall.x;
        const distanceY = secondBall.y - firstBall.y;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        return distance < firstBall.radius + secondBall.radius;
    }
    //
    // static collision(ball1, ball2){
    //     const dx = ball2.x - ball1.x;
    //     const dy = ball2.y - ball1.y;
    //     const distance = Math.sqrt(dx * dx + dy * dy);
    //
    //     if (distance < ball1.radius + ball2.radius) {
    //         ball1.vector.x *= -1;
    //         ball1.vector.y *= -1;
    //
    //         ball2.vector.x *= -1;
    //         ball2.vector.y *= -1;
    //     }
    // }

}
export default BallPhysics;
