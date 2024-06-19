import { ctx } from "./canvas";
import { addEntity, entities } from "./entity";
import { Field } from "./entities/Field";

const FPS = 60;

export let cellsInLevel = [];  

function run() {
    setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const entity of entities) {
            entity.update();
            entity.draw();
        }
    }, 1000 / 60)
}

addEntity(new Field(10, 10));
run();