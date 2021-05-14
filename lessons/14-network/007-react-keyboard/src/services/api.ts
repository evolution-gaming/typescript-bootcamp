
export async function getPizza() {
    const res = await fetch("/pizza");
    const json = await res.json();

    return {
        items: json._items,
    };
}

interface LogPayload {
    name: string;
    timestamp: string;
}

export async function log(payload: LogPayload = {
    name: process.env.NAME!,
    timestamp: "123",
}) {
    await fetch("/log", {
        body: JSON.stringify(payload),
    })
}
