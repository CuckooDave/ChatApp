const adjectives = [''];

export function getRandomName() {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    

    return `${adjectives[adjectiveIndex]}`;
}
