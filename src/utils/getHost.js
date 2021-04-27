export const getSlug = () => {
    let host = window.location.hostname;

    if (
        host === "localhost" ||
        host.includes("jobs") ||
        host === "[::1]" ||
        host.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
    ) {
        host = "imports.solides.jobs";
    }

    const count = (host.match(/\./g) || []).length;
    let slug = "";

    if (
        (count > 1 && !host.includes("localhost")) ||
        (count === 1 && host.includes("localhost"))
    ) {
        slug = host.split(".")[0];
    }

    return slug;
};

export const getHost = () => {
    let host = window.location.hostname;
    if (
        host.includes("localhost") ||
        host.includes("jobs") ||
        host === "[::1]" ||
        host.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
    ) {
        host = "http://localhost:3000";
    } else {
        const count = (host.match(/\./g) || []).length;
        if (count > 1) {
            const slug = host.split(".");
            host = slug.includes("homol")
                ? "https://homol.solides.jobs"
                : "https://solides.jobs";
        } else {
            host = "https://solides.jobs";
        }
    }

    return host;
};
