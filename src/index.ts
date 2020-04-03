declare const global: { mm: object; };

export default function set<T>(key: string, value: T) {
	const mm = global.mm ? global.mm : (global.mm = {});
	mm[key] = value;
}
