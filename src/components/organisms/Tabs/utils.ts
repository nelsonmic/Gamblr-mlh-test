const timeout = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

export async function sleep(ms = 1000, value = true) {
    await timeout(ms);
    return value;
}
