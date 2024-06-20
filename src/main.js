import { ctx } from "./canvas";
import { addEntity, entities } from "./entity";
import { Field } from "./entities/Field";

const FPS = 60;

function run() {
    setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const entity of entities) {
            entity.updating();
            entity.drawing();
        }
    }, 1000 / 60)
}

addEntity(new Field(10, 10));
run();