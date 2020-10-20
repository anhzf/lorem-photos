export function isNull(val) {
    return val === null;
}

export function randNumber(multiplier = 1) {
    return Math.round(Math.random() * multiplier);
}

export function plainValueOf(val) {
    return JSON.parse(JSON.stringify(val));
}

export class UtilURL extends URL {
    joinPath(...paths) {
        const currentPaths = this.pathname.split('/');
        const joinedPaths = [...currentPaths, ...paths]
            .reduce(
                // we not accept null value
                (joined, path) => (isNull(path) ? [...joined] : [...joined, path]),
                [],
            );

        this.pathname = joinedPaths.join('/');

        return this;
    }
}
