import axios from "axios";

const CMS_BASE_URL = process.env.NEXT_PUBLIC_CMS_API_URL;
const CMS_ACCESS_TOKEN = process.env.NEXT_PUBLIC_CMS_ACCESS_TOKEN;

export type Entries = {
    spaceId: string;
    enviromentId: "master" | "staging";
}

export async function getAllEntries(entry: Entries) {
    const response = await axios.get(`/spaces/${entry.spaceId}/environments/${entry.enviromentId}/entries?access_token=${CMS_ACCESS_TOKEN}`);
    return response.data;
}