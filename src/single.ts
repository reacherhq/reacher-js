import axios, { AxiosRequestConfig } from 'axios';
import { debug } from 'debug';

import { components } from './types';

const l = debug('reacher:single');

// These small type hacks are for generating nice documentation.
type ICheckEmailInput = components['schemas']['CheckEmailInput'];
type ICheckEmailOutput = components['schemas']['CheckEmailOutput'];
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckEmailInput extends ICheckEmailInput {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckEmailOutput extends ICheckEmailOutput {}

/**
 * Reacher's backend base URL, without the version number
 */
const REACHER_BACKEND_URL = `https://ssfy.sh/amaurymartiny/reacher`;
const REACHER_LASTEST_VERSION = '0.1.6';

/**
 * Options for checking an email.
 */
export interface CheckSingleOptions {
	/**
	 * Unique Reacher API token to use. If not passed, then the API is still
	 * usable, but will be heavily rate-limited (50 verifications per month).
	 */
	apiToken?: string;
	/**
	 * Backend version of Reacher to use. The latest version is 0.1.5.
	 */
	apiVersion?: '0.1.5' | '0.1.6';
	/**
	 * @reacherhq/api uses axios under the hood, pass axios config here.
	 */
	axios?: AxiosRequestConfig;
	/**
	 * For users self-hosting Reacher and who would not like to use the Reacher
	 * SaaS, this option allows to override the backend URL to call. This
	 * option overrides the `apiVersion` option.
	 */
	backendUrl?: string;
}

/**
 * Perform an email verification on the input email address.
 *
 * @param input - An object holding the email to be verified, as well as some
 * other configuration parameters to be used during the verification.
 * @param options - Additional options for making the API call.
 */
export function checkSingle(
	input: CheckEmailInput,
	options: CheckSingleOptions = {}
): Promise<CheckEmailOutput> {
	l('Processing email %s', input.to_email);

	const backendUrl =
		options.backendUrl ||
		`${REACHER_BACKEND_URL}@${
			options.apiVersion || REACHER_LASTEST_VERSION
		}/check_email`;

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const headers: Record<string, string> = {
		'Content-Type': 'application/json',
		...options.axios?.headers,
	};
	if (options.apiToken) {
		headers.Authorization = options.apiToken;
	}

	return axios
		.post<CheckEmailOutput>(backendUrl, input, {
			...options.axios,
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			headers,
		})
		.then(({ data }) => {
			l('Got result for %s: %s', input.to_email, data.is_reachable);

			return data;
		})
		.catch((err) => {
			l('Got error for %s: %s', input.to_email, err);

			throw err;
		});
}
