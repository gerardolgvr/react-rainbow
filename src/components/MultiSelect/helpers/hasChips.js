export default function hasChips(value) {
    if (!value) {
        return false;
    }
    if (Array.isArray(value)) {
        return value.length > 0;
    }
    return typeof value === 'object';
}
