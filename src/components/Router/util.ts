let idCounter = 0;

export const createRouteId = (): string => `route-id-${idCounter++}`;
