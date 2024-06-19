export const entities = []

export function getEntitiesByType(type) {
    return entities.filter(entity => entity instanceof type);
}

export function addEntity(entity) {
    entities.push(entity);
}

export function removeEntity(entity) {
    const index = entities.indexOf(entity);
    if (index > -1) {
        entities.splice(index, 1);
    }
}
