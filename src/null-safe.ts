export function nullSafe<T, 
	K0 extends keyof T, 
	K1 extends keyof T[K0],
	K2 extends keyof T[K0][K1],
	K3 extends keyof T[K0][K1][K2],
	K4 extends keyof T[K0][K1][K2][K3],
	K5 extends keyof T[K0][K1][K2][K3][K4]>
	(obj: T, k0: K0, k1?: K1, k2?: K2, k3?: K3, k4?: K4, k5?: K5) {
	let result: any = obj;

	const keysCount = arguments.length - 1;
	for (var i = 1; i <= keysCount; i++) {
		if (result === null || result === undefined) return result;
		result = result[arguments[i]];
	}

	return result;
}
