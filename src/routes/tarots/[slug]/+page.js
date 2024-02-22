export async function load({ params }) {
    const tarot = await import(`../${params.slug}.md`);
    const { title, number, source } = tarot.metadata;
    const Content = tarot.default;

    return {
        Content,
        title,
        number,
        source
    };
}