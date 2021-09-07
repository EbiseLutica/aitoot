import { genAid } from '../aid';
import {
	aidToMastodonId,
	cutNoiseFromAid,
	cutNoiseFromMastodonId,
	cutTimestampFromAid,
	cutTimestampFromMastodonId,
	mastodonIdToAid,
} from './convert-id';

const TEST_AID = '8qcu6xj4ts';
const TEST_MID = 106868733487721995n;
const TEST_DUMMIES: string[] = [];

for (let i = 0; i < 1000000; i++) {
	TEST_DUMMIES.push(genAid(new Date()));
}

const TEST_DUMMIES2 = TEST_DUMMIES.map(id => aidToMastodonId(id));

test('AIDのパースできてるかどうか', () => {
	const ts = cutTimestampFromAid(TEST_AID);
	const noise = cutNoiseFromAid(TEST_AID);
	expect(ts + noise).toEqual(TEST_AID);
});

test('Mastodon IDのパースできてるかどうか', () => {
	const ts = cutTimestampFromMastodonId(TEST_MID);
	const noise = cutNoiseFromMastodonId(TEST_MID);
	expect((ts << 16n) + noise).toEqual(TEST_MID);
});

test('IDが変換できてるかどうか', () => {
	const id = mastodonIdToAid(aidToMastodonId(TEST_AID));
	expect(id).toEqual(TEST_AID);
});

test(`${TEST_DUMMIES.length}件のAIDを変換できるかどうか`, () => {
	for (const data of TEST_DUMMIES) {
		aidToMastodonId(data);
	}
});

test(`${TEST_DUMMIES.length}件のMastodon IDを変換できるかどうか`, () => {
	for (const data of TEST_DUMMIES2) {
		mastodonIdToAid(data);
	}
});