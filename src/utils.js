export function isNull(val) {
    return val === null;
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
