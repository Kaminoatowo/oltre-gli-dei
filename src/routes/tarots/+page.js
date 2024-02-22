export const load = async ({ fetch }) => {
    const response = await fetch('/api/tarots');
    const tarots = await response.json();
    return {
        tarots
    };
}