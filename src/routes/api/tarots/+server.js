import { fetchMarkdownTarots } from "$lib/utils";
import { json } from '@sveltejs/kit';
// json is a helper function to return a JSON response with the correct headers

export const GET = async () => {
    const allTarots = await fetchMarkdownTarots( "tarots" );

    const sortedTarots = allTarots.sort((b, a) => {
        return b.meta.number - a.meta.number;
    });
    // sort Tarots by date

    return json(sortedTarots);
};