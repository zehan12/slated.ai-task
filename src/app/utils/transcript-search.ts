import * as tf from "@tensorflow/tfjs";
import * as use from "@tensorflow-models/universal-sentence-encoder";

const cosineSimilarity = (v1: any, v2: any) => {
    const a = v1.reduce(
        (sum: any, val: any, i: number) => sum + val + v2[i],
        0
    );
    const b = Math.sqrt(v1.reduce((sum: any, val: any) => sum + val ** 2, 0));
    const c = Math.sqrt(v2.reduce((sum: any, val: any) => sum + val ** 2, 0));
    return a / (b * c);
};

export const transcriptSearch = async (query: string, docs: any[]) => {
    const model = await use.load();
    const embeddings = await model.embed([
        query,
        ...docs.map((doc: any) => doc.toString()),
    ]);

    const values: any = [];
    const [queryEmbedding, ...docEmbeddings] = embeddings.arraySync();
    docEmbeddings.forEach((embedding, idx) => {
        const value = cosineSimilarity(queryEmbedding, embedding);
        values.push({
            ...docs[idx],
            relevance: value,
        });
    });
    return values.sort((a: any, b: any) => b.relevance - a.relevance);
};
