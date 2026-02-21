export async function GetRequest(url: string) {
    try {
        const response = await fetch(url, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error("Erro na requisição");
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Get Request error:", error);
        return null;
    }
}