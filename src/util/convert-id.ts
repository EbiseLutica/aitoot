const AID_RADIX = 36;
const AID_EPOCH = 946684800000n;

export const aidToMastodonId = (aid: string) => {
	const partTimestamp = BigInt(parseInt(cutTimestampFromAid(aid), AID_RADIX)) + AID_EPOCH;
	const partNoise = BigInt(parseInt(cutNoiseFromAid(aid), AID_RADIX));

	const id = (partTimestamp << 16n) + partNoise;
	return id;
};

export const mastodonIdToAid = (mid: bigint) => {
	const partTimestamp = cutTimestampFromMastodonId(mid) - AID_EPOCH;
	const partNoise = cutNoiseFromMastodonId(mid);

	const id1 = partTimestamp.toString(36).padStart(8, '0');
	const id2 = partNoise.toString(36).padStart(2, '0').slice(-2);

	return id1 + id2;
};

export const cutTimestampFromAid = (aid: string) => aid.slice(0, aid.length - 2);
export const cutNoiseFromAid = (aid: string) => aid.slice(aid.length - 2, aid.length);

export const cutTimestampFromMastodonId = (mid: bigint) => mid >> 16n;
export const cutNoiseFromMastodonId = (mid: bigint) => mid & 0xffffn;
