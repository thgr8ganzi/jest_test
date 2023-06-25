function generateUUID() {
    const d =
        typeof performance === 'undefined' ? Date.now() : performance.now() * 1000;

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16 + d) % 16 | 0;

        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};
describe('generateUUID', () => {
    test('should return a valid UUID', () => {
        const uuid = generateUUID();
        const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        expect(uuid).toMatch(regex);
    });
});
