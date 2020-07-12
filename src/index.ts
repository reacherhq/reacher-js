import axios, { AxiosRequestConfig } from 'axios';

import pkgJson from '../package.json';
import { components } from './types';

export type CheckEmailInput = components['schemas']['CheckEmailInput'];
export type CheckEmailOutput = components['schemas']['CheckEmailOutput'];

/**
 * Reacher's backend base URL.
 */
const REACHER_BACKEND_URL = `https://ssfy.sh/amaurymartiny/reacher@${
	(pkgJson as { version: string }).version
}`;

/**
 * Perform an email verification on the input email address.
 *
 * @param input - An object holding the email to be verified, as well as some
 * other configuration parameters to be used during the verification.
 * @param apiToken - Your Reacher's API token. If not passed, then the API is
 * still usable, but heavy rate-limiting will be applied.
 * @param config - Additional configuration to be passed to the axios request.
 */
export function checkEmail(
	input: CheckEmailInput,
	apiToken?: string,
	config: AxiosRequestConfig = {}
): Promise<CheckEmailOutput> {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const headers: Record<string, string> = {
		'Content-Type': 'application/json',
		...config.headers,
	};
	if (apiToken) {
		headers.Authorization = apiToken;
	}

	return axios
		.post<CheckEmailOutput>(`${REACHER_BACKEND_URL}/check_email`, input, {
			...config,
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			headers,
		})
		.then(({ data }) => data);
}
